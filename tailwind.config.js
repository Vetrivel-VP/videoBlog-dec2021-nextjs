module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBg: "#040506",
        searchBar: "#100f14",
        primary: "#100f14",
        textColor: "#b1b1b1",
        collectionBg: "rgba(0,0,0,.4)",
      },

      boxShadow: {
        primaryShadow: "0px 3px 20px rgba(0,0,0,0.4)",
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
