/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        vermelho: '#c43c46',
        text_color: 'wheat',
        cinza: '#282828'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [],
}
