import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      white: '#fff',
      black: '#222',
      red: '#ff0000',
      orange: '#b3441e',
      green: '#18404a',
    },
    fontFamily: {
      arsenal: 'Arsenal, sans-serif',
    },
    extend: {},
  },
} satisfies Config;
