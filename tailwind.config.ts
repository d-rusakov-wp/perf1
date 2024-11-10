import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#222',
      gray: '#708090',
      orange: '#b3441e',
      green: '#18404a',
      'dark-green': '#3affa326',
      'light-green': '#3affa373',
      red: '#ff0000',
    },
    fontFamily: {
      arsenal: 'Arsenal, sans-serif',
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
        highlight: 'highlight 1s infinite',
        'linear-gradient': 'linear-gradient 10s ease infinite',
        wave: 'wave 2s linear infinite',
      },
      keyframes: {
        highlight: {
          0: { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slide: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        wave: {
          to: { 'background-position': 'calc(50% + 1.6em) 0, calc(50% + 3.2em) 0.8em' },
        },
        'jump-left': {
          from: { left: '0' },
          to: { left: 'calc(100% - 10px)' },
        },
        'jump-top': {
          from: { top: '0' },
          to: { top: '-0.1px' },
        },
        'linear-gradient': {
          '0%': { 'background-position': '0 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0 50%' },
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
