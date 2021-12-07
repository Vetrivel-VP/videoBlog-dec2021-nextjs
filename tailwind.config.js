module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBg: "#1d1d1d",
        borderColor: "#252525",
        primary: "#65a181",
        textColor: "#a5a5a5",
        starGold: "#ffc700",
      },

      boxShadow: {
        primaryShadow: "0px 3px 20px rgba(0,0,0,0.4)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
