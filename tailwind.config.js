/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      text: 'var(--color-text)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
    },
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
