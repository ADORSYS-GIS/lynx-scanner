import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import basex from 'base-x';
import { Buffer } from 'buffer';
import { defineConfig } from 'vite';
import bundlesize from 'vite-plugin-bundlesize';
import eslint from 'vite-plugin-eslint';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import { robots } from 'vite-plugin-robots';
import tsconfigPaths from 'vite-tsconfig-paths';

const baseEncode = (plaintext: string): string => {
  const base =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'._~!$&()*+,;=:@";
  const converter = basex(base);
  return converter.encode(Buffer.from(plaintext));
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    bundlesize({
      limits: [
        {
          name: '**/*.js',
          limit: 500_000,
        },
      ],
    }),
    tsconfigPaths(),
    ViteMinifyPlugin({}),
    legacy({
      targets: ['defaults'],
      modernPolyfills: true,
    }),
    robots(),
    eslint({
      failOnWarning: false,
      failOnError: false,
    }),
    mkcert({
      savePath: './.certs', // save the generated certificate into certs directory
      force: true, // force generation of certs even without setting https property in the vite config
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Lynx Scanner',
        short_name: 'Lynx Scanner',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5_000_000,
      },
      pwaAssets: {
        disabled: false,
        config: 'pwa-assets.config.ts',
      },
    }),
  ],
  server: {
    proxy: {
      '/rest': {
        target: 'http://localhost:4010',
        rewrite: (path) => path.replace('/rest', '/'),
      },
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1_600, // 1.6KB
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (/project-env-variables.ts/.test(id)) {
            return 'project-env-variables';
          }

          if (id.includes('node_modules')) {
            const cleanName = id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
            return baseEncode(cleanName);
          }
        },
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
  },
});
