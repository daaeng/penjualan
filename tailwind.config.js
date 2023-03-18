/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      borderRadius: {
        '70px' : '70px',
      },

      colors : {
        'dark-purple' : '#081A51',
        'light-white' : 'rgba(255, 255, 255, 0.18)'
      },

      screens: {
        'sm': '200px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '368px', 'max': '767px'},
          {'min': '468px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }

    },
  },
  plugins: [],

  
}
