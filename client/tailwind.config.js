/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{html,js,jsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(304deg, rgba(19,149,150,1) 0%, rgba(89,203,68,1) 100%)',
      },
      colors: {
        bgCard: 'rgb(5, 6, 45)',
        whitesmoke: '#f5f5f5',
      },
      screens: {
        'xs': '412px', //Breakpoints personalizados
        'mdMiddle': '881px', 
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}