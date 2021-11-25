module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
