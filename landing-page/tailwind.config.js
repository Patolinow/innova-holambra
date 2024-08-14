/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('assets/images/background.svg')",
      },
      maxWidth: {
        'view': '1200px'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      fontFamily: {
        'gibson': ['Gibson', 'sans-serif']
      },
      colors: {
        'light-blue': '#4CBDB1',
        'dark-blue': '#003262',
        'black': '#212529',
      }
    },
  },
  plugins: [],
}

