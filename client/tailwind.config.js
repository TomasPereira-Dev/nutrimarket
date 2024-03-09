/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Nunito Sans", sans-serif',
       'poppins': '"Poppins", sans-serif'
      },
      colors: {
        darkGreen1: "#2a512a",
        darkGreen2: "#237323",
        grayishGreen1: "#418541",
        grayishGreen2: "#5ca35c",
        grayishGreen3: "#aac76f",
        grayishGreen4: "#dde2d0",
        yellowGreen: "#a7d251",
        avocadoGreen: "#76902e",
        teaGreen: "#E5F8BE",
        greenLabel: "#3BB77E",
        redLabel: "#B73B51",
        orangeLabel: "#F59758",
        blueLabel: "#3A82ED",
        gray: "#808080",
        whiteSmoke: "#F2F2F2",
        platinum: "#E6E6E6",
        sidebarWhite: "#F7F7F8"
      },
      backgroundImage: {
        heroImg: "url('./public/hero.png')"
      }
    },
  },
  plugins: [],
}