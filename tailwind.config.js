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
        "primary-100": "#FEEBCC",
        "primary-200": "#FED099",
        "primary-300": "#FCAF66",
        "primary-400": "#FA8F40",
        "primary-500": "#F75C03",
        "primary-600": "#D44102",
        "primary-700": "#B12C01",
        "primary-800": "#8F1A00",
        "primary-900": "#760E00",
      },
    },
  },
  plugins: [],
};
