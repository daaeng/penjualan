/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./component/**/*.{html,js}",
    "./page/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  darkMode: ['class', '[data-mode="dark"]'],

  theme: {
    extend: {
      maxHeight:{
        '128' : '32rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
        
      },
      height:{
        '22'  : '90px',
        '34'  : '131px',
        '128' : '32rem',
        '135' : '40rem',
        '140' : '50rem',
        '146' : '57rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      width:{
        '46' : '189px',
        '68' : '260px',
        '128' : '32rem',
        '135' : '40rem',
        '140' : '50rem',
        '146' : '57rem',
        '147' : '59rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      margin:{
        '34'  : '130px',
        '128' : '32rem',
        '135' : '40rem',
        '140' : '50rem',
        '146' : '57rem',
        '150' : '60rem',
        '256' : '64rem',
        '270' : '70rem',
        '300' : '100rem',
      },
      
      borderRadius: {
        '45px' : '45px',
        '70px' : '70px',
      },

      colors : {
        'dark-blue' : '#1939D8',
        'light-white' : 'rgba(255, 255, 255, 0.18)',
        'darkgolden'  : 'rgb(184,134,11)',
        'marron'      : '#E32222',
        // 'rgb(128,0,0)',
        'merah'        : '#E70000',
        'redd'        : '#B22222',
        'lightgold'   : '#FFD779',
        'cobamerah'   : '#B30024',
        'abucream'   : '#D9D9D9',
        'htmcerah'   : '#454545',
      },

      screens: {
        // 'xs': '50px',
        'sm': '200px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '500px', 'max': '767px'},
          {'min': '480px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }

    },
  },
  plugins: [],

  
}
