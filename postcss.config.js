module.exports = {
  theme: {
    extend: {
      colors: {
        "english-violet": theme("colors.english-violet"),
        black: theme("colors.black"),
        "black-2": theme("colors.black-2"),
        "pale-purple": theme("colors.pale-purple"),
        thistle: theme("colors.thistle"),
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
