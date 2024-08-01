/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.vue',
    './**/*.js',
    './**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['bumblebee'],
  },
}
