/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#36577d',
          200: '#243b55',
          300: '#141e30',
        },
        text: {
          100: '#ffffff',
          200: '#c5c5c5',
          300: '#1e3a8a',
        },
        bg: {
          100: '#ffffff',
          200: '#c5c5c5',
        },
      },
    },
  },
  plugins: [],
};
