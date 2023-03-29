const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["var(--font-titillium)", ...fontFamily.sans],
        lato: ["var(--font-lato)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      backgroundImage: {
        "bg-weather": "url('public/images/background.svg')",
        "bg-temp-now": "url('public/images/climate/bg-temp-now.jpg')",
      },
      borderWidth: ["first"],
    },
  },
  plugins: [],
}
