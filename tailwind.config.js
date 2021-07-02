module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
