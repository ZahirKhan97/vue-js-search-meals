/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: ['hover'],
      backgroundColor: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};