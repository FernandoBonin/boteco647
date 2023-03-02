/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vermelho: '#c43c46',
        text_color: 'wheat',
        cinza: '#282828',
        azul: '#0c63e4'
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
