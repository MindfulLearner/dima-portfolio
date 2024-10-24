/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VSCode color
        myVSCodeColor: '#1f1f1f', // color of the header
        searchbarColor: '#313131', // color of the searchbar
        // VSCode color
        accentColor: '#E3342F', // color of the accent
        neutralColor: '#6C757D', // color of the neutral
        successColor: '#38C172', // color of the success
        dangerColor: '#E3342F', // color of the danger
        warningColor: '#FFAA00', // color of the warning
        infoColor: '#6CB2EB', // color of the info
      },
    },
  },
  variants: {},
  plugins: [],
}
