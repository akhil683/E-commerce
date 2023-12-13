/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'header': 'header 0.3s ease forwards',
        'cart': 'cart 0.3s ease forwards',
      },
      keyframes: {
        header: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)', backgroundColor: 'linear-gradient(30deg, red, green)' },
        },
        cart: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}