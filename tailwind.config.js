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
  plugins: [
    (function({ matchUtilities, theme }) {
      // Add your custom styles here
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
  ],
};
