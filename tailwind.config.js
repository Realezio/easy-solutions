/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.vue',
    './**/*.js',
    './**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Quantico'],
        'sans': ['Montserrat', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['bumblebee'],
  },
}
