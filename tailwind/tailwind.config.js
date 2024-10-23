/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Include all JavaScript/TypeScript files in the src directory
    './public/index.html',          // Include your HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
