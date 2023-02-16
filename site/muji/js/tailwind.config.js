/** @type {import('tailwindcss').Config} './src/*.{html,js}', tailwind.config  module.exports*/

// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.html", "./**/*.{css,js}",],
  // important: true, // , "./**/*.js"
  theme: {
    
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1500px',
      // => @media (min-width: 1536px) { ... }
    },
    

    container: {
      center: true,
      padding: "15px",
      important: true,
      margin: "0 auto",

    },
    // border:{
    //   color: "#e1e1e1",
    // },
    extend: {
      colors: {
        black: "#111111",
        dark: "#333",
        "dark-700": "#090e34b3",
        primary: "#7f0019",
        secondary: "#13C296",
        "body-color": "#637381",
        "border": "#e1e1e1",
        warning: "#FBBF24",
        "light1":"#F6F7FB",
        "light2":"#FAFAFA"
      },
      boxShadow: {
        input: "0px 4px 30px rgba(0, 0, 0, 0.2)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      dropShadow: {
        'sm': "0px 4px 10px rgba(0, 0, 0, 0.05)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}