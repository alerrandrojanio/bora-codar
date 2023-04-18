const { fontFamily } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

const utilities = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
})

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
      colors: {
        upload: {
          icon: {
            bg: "#eee",
            color: "#aaa",
          },
          progress: {
            color: "black",
            text: "#999",
          },
        },
      },
      borderWidth: ["first"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer"), utilities],
}
