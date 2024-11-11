import type { Config } from 'tailwindcss';
import TailwindCSSMotion from 'tailwindcss-motion';

module.exports = {
  content: ['./index.html'],
  plugins: [TailwindCSSMotion],
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
    extend: {
      animation: {
        jump: 'jump-left 1.5s linear infinite alternate, jump-top 0.75s cubic-bezier(0, 200, 0.8, 200) infinite',
        'linear-gradient': 'linear-gradient 10s ease infinite',
        wave: 'wave 2s linear infinite',
      },
      keyframes: {
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
      },
      screens: {
        standalone: {
          raw: '(display-mode: standalone)',
        },
      },
    },
  },
} satisfies Config;
