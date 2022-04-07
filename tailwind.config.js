module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      myGrey: '#d4d4d4',
      stoneMiddle: '#a8a29e',
      blue50: '#eff6ff',
      neutral500: '#737373',
      white: '#ffffff'
    },
    extend: {
      backgroundImage:{
        'hero-image':'url("Components/assets/city.jpg")'
      },
    },
  },
  plugins: [],
}