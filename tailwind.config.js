const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
