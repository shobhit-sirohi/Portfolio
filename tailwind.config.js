module.exports = {
  purge: ["./src/**/*.html", "./src/**/*{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightgrey: "#f3f3f3",
        headinggrey: "#181717",
        textgrey: "#606060",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
