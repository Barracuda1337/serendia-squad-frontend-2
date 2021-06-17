module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',

    },
    extend: {
      colors: {
        c1: "#2A2438",
        c2: "#352F44",
        c3: "#5C5470",
        c4: "#DBD8E3"
      }
    },
    container: {
      center: true,
      padding: "2rem"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
