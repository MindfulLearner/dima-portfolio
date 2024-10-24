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
        backgroundTextEditor1: '#1f1f1f', // background
        emptybarColor: '#181818', // color of the empty bar
        // bottom section
        bottomSectionColor: '#181818', // color of the bottom section
      },
    },
  },
  variants: {},
  plugins: [],
}
