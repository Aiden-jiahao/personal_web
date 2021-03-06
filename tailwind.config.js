module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
  },
  screens: {
    tablet: "640px",
    // => @media (min-width: 640px) { ... }

    laptop: "1024px",
    // => @media (min-width: 1024px) { ... }

    desktop: "1280px", 
    // => @media (min-width: 1280px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
