const daisyConfig = require('./daisy-ui.config');

/** @type {import('tailwindcss').Config} */
export default {
  ...daisyConfig,
  content: ['./src/**/*.{tsx,scss}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
