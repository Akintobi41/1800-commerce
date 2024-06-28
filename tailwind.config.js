/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "bold-font": "27px",
      text: "13px",
      sm: '0.1rem',
    },
    extend: {
      keyframes: {
        Shake: {
          '0%,50%,100%': { transform: 'rotate(3deg)' },
          '25%,75%': { transform: 'rotate(-3deg)' },
        }
      },
      animation: {
        Shake: 'Shake .3s linear',
      }
      
    },
  },
  plugins: [],
};
