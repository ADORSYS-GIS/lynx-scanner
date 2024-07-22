const daisyConfig = require('./daisy-ui.config');

/** @type {import('tailwindcss').Config} */
export default {
  ...daisyConfig,
  content: [
    './src/**/*.{tsx,scss}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
