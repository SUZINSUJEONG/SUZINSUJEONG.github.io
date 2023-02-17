/** @type {import('tailwindcss').Config} tailwind.config /module.exports */
// const plugin = require('tailwindcss/plugin')
module.exports= {
  // important: true,
  content: ["./*.html","*/*.js"],// "./**/*.{css,js}" ,"*/*.{css,js}"

  corePlugins: {
    preflight: false,
    border: false,
    // hidden: false,
  //  container: false,
  },

  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'], //14px 폰트, 20px line-height
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
      // },

// fontSize: {
//       '2xl': ['1.5rem', {
//         lineHeight: '2rem',
//         letterSpacing: '-0.01em',
//         fontWeight: '500',
//       }],
//       '3xl': ['1.875rem', {
//         lineHeight: '2.25rem',
//         letterSpacing: '-0.02em',
//         fontWeight: '700',
//       }],
//     },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "960px",

      xl: "1300px",

      "2xl": "1600px",
      // sm: {'max': '480px'},

      // md: {'max': '768px'},

      // lg: {'max': '960px'},

      // xl: {'max': '1600px'},

    //   '2xl': {'max': '1600px'},
     
    },
   
    container: {
      center: true,
      padding: "16px",
      margin: "0 auto",
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      //   lg: '50px',
      //   xl: '50px',
      //   '2xl': '1rem',
      // },
      
    },
   
    
    extend: {
      important: true,
      colors: {
        primary: "#05cd82",
        primary2: "#00BF96",
        secondary: "#00BACC",
        // stroke
        stroke:"#C7D9D2",
        //text
        text1:"#131A15",
        text2:"#5E635F",paragraph:"#5e635f",
        text3:"#A9ABAA",
        text4:"#F4F4F4",

        //green
        green1:"#001D0B",
        green2:"#014929",
        green3:"#037547",
        green4:"#04a164",
        //point
        point1:"#FF7E36",
        point2:"#FF985E",
        point3:"#6610F2",

        //bg
        surfaceLow:"#E7FAF3",
        surfaceMid:"#f1fcf8",
        surfaceHigh:"#FCFEFE",

      },
      boxShadow: {
        '1':"0px 2px 20px 17px rgba(4, 185, 117, 0.04)",
        '2':"0px 12px 30px 17px rgba(4, 185, 117, 0.04)",
        '3':"0px 4px 12px rgba(4, 185, 117, 0.1)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'default1':"0px 2px 20px 17px rgba(19, 26, 21, 0.18)",
        'button':'0px 12px 30px rgba(4, 185, 117, 0.18)',
        'default-button':'0px 12px 30px rgba(19, 26, 21, 0.18)',
        'dropdown':'rgba(19, 26, 21, 0.15), 0px 1px 2px rgba(4, 185, 117, 0.3)',

      },
      dropShadow: {
        '1': " 0px 2px 20px 17px rgba(24, 92, 255, 0.04)",
        '2':"0px 12px 30px 17px rgba(24, 92, 255, 0.04)",
        '3':"0px 4px 12px rgba(12, 68, 204, 0.1)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'button':'0px 12px 30px rgba(4, 185, 117, 0.18)',
        'default-button':'0px 12px 30px rgba(19, 26, 21, 0.18)',
        'dropdown':'rgba(19, 26, 21, 0.15), 0px 1px 2px rgba(4, 185, 117, 0.3)',
        'sm': "0px 4px 10px rgba(0, 0, 0, 0.05)",
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
      },
      animation: {
        'moveforever': 'moveforever 10s linear infinite',
      },
      keyframes: {
        moveforever: {
          'from': { top: '0' },
          'to': { top: '-100%' },
        }
      },
      // flex: {
      //   'col-6': '0 0 50%'
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // (function({ addBase, theme }) {
    //   addBase({
    //     '@media (max-width: 1600px)': {
    //       '.container': { 'max-width': '1600px' }
    //     },
    //     '@media (max-width: 960px)': {
    //       '.container': { 'max-width': '960px' }
    //     },
    //     '@media (max-width: 768px)': {
    //       '.container': { 'max-width': '768px' }
    //     },
    //     '@media (max-width: 480px)': {
    //       '.container': { 'max-width': '480px' }
    //     },
    //   })
    // }),
    
    // plugin(function({ addBase, theme }) {
    //   addBase({
    //     'h1': { fontSize: theme('fontSize.2xl') },
    //     '@media (min-width: 500px)': {
    //       'h1': { fontSize: theme('fontSize.2xl') }
  
    //       // ...
    //     },
    //     'h2': { fontSize: theme('fontSize.xl') },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //   })
    // })
  ],
}
