/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        lxregular: ['Lexend-Regular', 'sans-serif'],
        lxmedium: ['Lexend-Medium', 'sans-serif'],
        lxsemiBold: ['Lexend-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
