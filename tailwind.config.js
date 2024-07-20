
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deactive": "#54607A"
      },
      fontFamily: {
        "Estedad100": "Estedad100",
        "Estedad200": "Estedad200",
        "Estedad300": "Estedad300",
        "Estedad400": "Estedad400",
        "Estedad500": "Estedad500",
        "Estedad600": "Estedad600",
        "Estedad700": "Estedad700",
        "Estedad800": "Estedad800",
        "Estedad900": "Estedad900",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
    },
  ],
}

