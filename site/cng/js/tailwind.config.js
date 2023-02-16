/** @type {import('tailwindcss').Config} tailwind.config /module.exports */
module.exports= {
  // important: true,
  content: ["**/**/*.html",],// "./**/*.{css,js}" ,"*/*.{css,js}"

  corePlugins: {
    preflight: false,
  },

  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'], //14px 폰트, 20px line-height
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
      // },

// text-xs	font-size: 0.75rem; /* 12px */
// line-height: 1rem; /* 16px */

// text-sm	font-size: 0.875rem; /* 14px */
// line-height: 1.25rem; /* 20px */

// text-base	font-size: 1rem; /* 16px */
// line-height: 1.5rem; /* 24px */

// text-lg	font-size: 1.125rem; /* 18px */
// line-height: 1.75rem; /* 28px */

// text-xl	font-size: 1.25rem; /* 20px */
// line-height: 1.75rem; /* 28px */

// text-2xl	font-size: 1.5rem; /* 24px */
// line-height: 2rem; /* 32px */

// text-3xl	font-size: 1.875rem; /* 30px */
// line-height: 2.25rem; /* 36px */

// text-4xl	font-size: 2.25rem; /* 36px */
// line-height: 2.5rem; /* 40px */

// text-5xl	font-size: 3rem; /* 48px */
// line-height: 1;

// text-6xl	font-size: 3.75rem; /* 60px */
// line-height: 1;

// text-7xl	font-size: 4.5rem; /* 72px */
// line-height: 1;

// text-8xl	font-size: 6rem; /* 96px */
// line-height: 1;

// text-9xl	font-size: 8rem; /* 128px */
// line-height: 1;
 

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
      sm: "480px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1300px",
      // => @media (min-width: 1400px) { ... }
    },
    // '!container': {
    //   center: true,
    //   padding: "16px",
    //   margin: "0 auto",
    // },
    container: {
      center: true,
      //padding: "16px",
      margin: "0 auto",
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '50px',
        xl: '50px',
        '2xl': '1rem',
      },
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

        // "body-color": "#637381",
        // warning: "#FBBF24",
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
