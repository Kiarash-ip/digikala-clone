/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      white: "#fff",
      neutral: {
        100: "#f1f2f4",
        200: "#e0e0e6",
        300: "#c3c3ce",
        400: "#9e9fb1",
        500: "#767790",
        600: "#5a5c7a",
        700: "#3f4064",
        800: "#23254e",
        900: "#080a38"
      },
      fresh: {
        300: "#9dc44d",
        500: "#6bb927",
        700: "#39ae00"
      },
      primary: {
        700: "#ef394e",
        500: "#ef4056"
      },
      icon: {
        low_emphasis: "#9e9fb1",
        high_emphasis: "#3f4064"
      },
      button: {
        black: "#080a38"
      }
    },
    extend: {
      fontFamily: {
        IRANYekanRegular: ["IRANYekanRegular", "sans-serif"]
      },
      backgroundImage: {
        'fresh-pattern': "url('/images/freshPattern.svg')",
      }
    },
  },
  plugins: [],
}
