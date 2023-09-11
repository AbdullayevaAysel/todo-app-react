export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "bright-blue": "hsl(220, 98%, 61%)",
      "check-background":
        "linear-gradient(hsl(192, 100%, 67%) to hsl(280, 87%, 65%))",

      "very-light-gray": "hsl(0, 0%, 98%)",
      "very-light-grayish-blue": "hsl(236, 33%, 92%)",
      "light-grayish-blue": "hsl(233, 11%, 84%)",
      "dark-grayish-blue": "hsl(236, 9%, 61%)",
      "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

      "very-dark-blue": "hsl(235, 21%, 11%)",
      "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
      "light-grayish-blue-2": "hsl(234, 39%, 85%)",
      "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      "dark-grayish-blue-2": "hsl(234, 11%, 52%)",
      "very-dark-grayish-blue-2": "hsl(233, 14%, 35%)",
      "very-dark-grayish-blue-3": "hsl(237, 14%, 26%)",
    },
    extend: {
      backgroundImage: {
        "desktop-light": "url('./assets/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('./assets/images/bg-desktop-dark.jpg')",

        "mobile-light": "url('./assets/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('./assets/images/bg-mobile-dark.jpg')",

        "icon-check": "url('./assets/images/icon-check.svg')",
        "icon-cross": "url('./assets/images/icon-cross.svg')",
        "icon-moon": "url('./assets/images/icon-moon.svg')",
        "icon-sun": "url('./assets/images/icon-sun.svg')",

        "check-background": "url('./assets/images/angryimg.png')",
      },

      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
