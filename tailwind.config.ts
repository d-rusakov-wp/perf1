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
      cuprum: 'Cuprum, sans-serif',
    },
    extend: {
      fontFamily: {
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
          'Apple Color Emoji',
          'Twemoji Mozilla',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
          'EmojiOne Color',
          'Android Emoji',
        ],
      },
      animation: {
        jump: 'jump-left 1.5s linear infinite alternate, jump-top 0.75s cubic-bezier(0, 200, 0.8, 200) infinite',
      },
      keyframes: {
        'jump-left': {
          from: { left: '0' },
          to: { left: 'calc(100% - 10px)' },
        },
        'jump-top': {
          from: { top: '0' },
          to: { top: '-0.1px' },
        },
      },
      screens: {
        standalone: {
          raw: '(display-mode: standalone)',
        },
      },
    },
  },
} satisfies Config;

// Что, черт возьми, мне с этим делать
