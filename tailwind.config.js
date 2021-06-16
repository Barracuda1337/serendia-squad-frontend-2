module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
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
