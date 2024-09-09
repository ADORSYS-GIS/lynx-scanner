import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    eslint(),
    mkcert({
      savePath: './.certs', // save the generated certificate into certs directory
      force: true, // force generation of certs even without setting https property in the vite config
    }),
  ],
});
