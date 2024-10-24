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
        // SectionTextEditor1 presentazione
        backgroundTextEditor1: '#6b6b6b', // background
        neutralColor: '#6C757D', // color of the neutral
        // SectionTextEditor2
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
