import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      white: '#fff',
      black: '#222',
      gray: '#708090',
      orange: '#b3441e',
      green: '#18404a',
      red: '#ff0000',
    },
    fontFamily: {
      arsenal: 'Arsenal, sans-serif',
    },
    extend: {
      animation: {

      },
      keyframes: {

      }
    },
  },
} satisfies Config;

// Что, черт возьми, мне с этим делать
