/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        white: "white",
        text: {
          dark: "#3B5162",
          gray: "#889898",
          light: "#ABBBC2",
          lighter: "#E0E6E9",
        },

        base: {
          white: "#FAFAFA",
          "dark-line": "#393C49",
          "dark-1": "#252836",
          "dark-2": "#1F1D2B",
          form: "#2D303E",
        },
        accent: {
          green: "green",
          red: "red",
          orange: "orange",
          blue: "blue",
          purple: "purple",
        },
      },
    },
  },
  plugins: [],
};
