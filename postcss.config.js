module.exports = {
  plugins: {
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
