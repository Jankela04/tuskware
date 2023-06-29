/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#feebcc",
          200: "#fed099",
          300: "#fcaf66",
          400: "#fa8f40",
          500: "#f75c03",
          600: "#d44102",
          700: "#b12c01",
          800: "#8f1a00",
          900: "#760e00",
        },
      },
    },
  },
  plugins: [],
};
