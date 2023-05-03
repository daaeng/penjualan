/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./component/**/*.{html,js}",
    "./page/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  darkMode: true,

  theme: {
    extend: {
      maxHeight:{
        '128' : '32rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
        
      },
      height:{
        '128' : '32rem',
        '140' : '50rem',
        '146' : '57rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      width:{
        '128' : '32rem',
        '140' : '50rem',
        '146' : '57rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      margin:{
        '128' : '32rem',
        '140' : '50rem',
        '146' : '57rem',
        '150' : '60rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      borderRadius: {
        '70px' : '70px',
      },

      colors : {
        'dark-purple' : '#081A51',
        'light-white' : 'rgba(255, 255, 255, 0.18)',
        'darkgolden'  : 'rgb(184,134,11)',
        'marron'      : '#E32222',
        // 'rgb(128,0,0)',
        'redd'        : '#B22222',
        'lightgold'   : '#FFD779',
        'cobamerah'   : '#B30024',
      },

      screens: {
        // 'xs': '50px',
        'sm': '200px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '400px', 'max': '767px'},
          {'min': '468px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }

    },
  },
  plugins: [],

  
}
