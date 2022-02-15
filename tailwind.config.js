module.exports = {
  purge: ["./src/**/*.html", "./src/**/*{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightgrey: "#f3f3f3",
        headinggrey: "#181717",
        textgrey: "#606060",
        behance: "#105DFB",
        dribbble: "#E84C88",
        figma: "#A259FF",
        linkedin: "#1275B1",
        twitter: "#47ACDF",
        steam: "#144B7E",
        gmail: "#4285F4",
        orangy: "#FF7722",
        spotify: "#1ED760",
        blu: "#2429AF",
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
