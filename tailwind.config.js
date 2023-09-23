/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      unica: ["Unica One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        backManGlasses: "url('/manGlasses.png')",
        backShield: "url('/shield.svg')",
      },
    },
  },
  plugins: [],
};
