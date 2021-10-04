module.exports = {
  purge: ["./pages/**/**", "./components/**/**", "./util/**/**"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: "#151f28",
        outline: "#3d4041",
        highlight: "#d6a355",
        danger: "#b32430",
      },
      fontFamily: {
        bender: ["bender"],
      },
      maxHeight: {
        container: "600px",
      },
      maxWidth: {
        img: "150px",
        sidebar: "340px",
      },
      height: {
        container: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
