/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        Shake: {
          '0%,50%,100%': { transform: 'rotate(3deg)' },
          '25%,75%': { transform: 'rotate(-3deg)' },
        }
      },
      animation: {
        Shake: 'Shake .3s linear',
      },
     
    },
  },
  screens: {
    'l-screen': '900px'
    },

  plugins: [],
};
