/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        confirm: 'var(--color-confirm)',
        danger: 'var(--color-danger)',
      },
      fontFamily: {
        lxregular: ['Lexend-Regular', 'sans-serif'],
        lxmedium: ['Lexend-Medium', 'sans-serif'],
        lxsemibold: ['Lexend-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
