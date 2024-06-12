/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {},
      fontFamily: {},
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("js", ".js &");
      addVariant("nojs", ".no-js &");
    }),
  ],
}

