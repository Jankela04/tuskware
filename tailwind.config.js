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
        foreground: "#FEFBFB",
        background: "#1A0604",
        border: "#4F120C",
        secondary: { DEFAULT: "#321D1B", hover: "#4C2C29" },
        accent: "#D42D21",
        primary: {
          DEFAULT: "#B0251C",
          50: "#EE9B95",
          100: "#EB8A84",
          200: "#E66961",
          300: "#E0473D",
          400: "#D32C22",
          500: "#B0251C",
          600: "#801B14",
          700: "#4F110D",
          800: "#1F0605",
        },
      },
    },
  },
  plugins: [],
};
