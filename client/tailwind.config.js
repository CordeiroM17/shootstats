/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#141e30',
        secondary: '#243b55',
      },
    },
  },
  plugins: [],
};
