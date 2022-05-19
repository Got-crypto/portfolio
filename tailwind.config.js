module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'profile': "url('./images/soul.jpg')",
        'hero': "url('./images/white-background.jpg')",
        'hero2': "url('./images/background-flowers.jpg')"
      },
      backgroundColor : {
        'primary': '#242424'
      },
      textColor : {
        'primary': '#242424'
      },
      width : {
        'slider': '1000px'
      },
    },
  },
  plugins: [],
}
