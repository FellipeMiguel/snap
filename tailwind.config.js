/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#FAFAFA",
        "medium-gray": "#696969",
        "almost-black": "#141414",
      },
      backgroundImage: {
        "hero-desktop": "url('../img/image-hero-desktop.png')",
        "hero-mobile": "url('../img/image-hero-mobile.png')",
      },
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}

