/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "brown": {
          900: "#634832",
          600: "#967259;",
          300: "#DBC1AC;",
          100: "#ECE0D1;",
        }
      },
      "boxShadow": {
        "normal": "0px 1px 10px 0px #0000000D;"
      },
      "borderRadius": {
        "xl4": "2rem"
      },
      "fontFamily": {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaBold": "Morabba Bold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
      },
      "fontSize": {
        "md": "20px"
      },
      "letterSpacing": {
        "tightest": "-0.065em"
      },
      "container": {
        "center": true,
        "padding": {
          "DEFAULT": '1rem',
          "sm": '.0625rem',
        }
      },
      "backgroundImage": {
        "mobile": "url(../headerBgMobile.webp)",
        "desktop": "url(../headerBgDesktop.webp)",

        "content": "url(../body-bg.png)",


      }
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", ["&>*"]);
      addVariant("child-hover", ["&>*:hover"]);
    }
  ],
}