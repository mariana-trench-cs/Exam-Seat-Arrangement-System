/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        st: '1384px',
        'hw': { 'max': '1384px' }
      },
      colors: {
        'green-login': '#92DBB6',
        'green-medium': '#008',
        'green-light': '#295D68',
        'green-dark': '#111af6',
        'green-save': '#008',
        'grey-all': '#BECC',
        'red-download': '#DD7A96',
        'background': '#efefef',
      },
      letterSpacing: {
        needed: '.09em',
      },

      fontFamily: { //custom font style
        'Outfit-Thin': "Outfit-Thin",
        'Outfit-ExtraLight': "Outfit-ExtraLight",
        'Outfit-Light': "Outfit-Light",
        'Outfit-Regular': "Outfit-Regular",
        'Outfit-Medium': "Outfit-Medium",
        'Outfit-SemiBold': "Outfit-SemiBold",
        'Outfit-Bold': "Outfit-Bold",
        'Outfit-ExtraBold': "Outfit-ExtraBold",
        'Outfit-Black': "Outfit-Black",
      },

      backgroundImage: {
        'login-signup': "url('/src/assets/bgimage.png')",
        
      }
    },
  },
  plugins: [],
};
