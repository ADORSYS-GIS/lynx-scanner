import themes from 'daisyui/src/theming/themes';

const coreColors = {
  primary: '#00a49a',
  secondary: '#00d500',
  accent: '#ff5d6e',
  neutral: '#100e13',
  info: '#0082f7',
  success: '#4ad800',
  warning: '#f7a100',
  error: '#ff2100',
};

export default {
  daisyui: {
    themes: [
      {
        'lynx-light': {
          ...themes.cmyk,
          ...coreColors,
        },
      },
      {
        'lynx-dark': {
          ...themes.lemonade,
          ...coreColors,
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="lynx-dark"]'],
};
