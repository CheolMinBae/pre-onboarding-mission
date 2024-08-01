/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-bg": "rgba(231,233,234,0.1)",
      },
    },
  },
  plugins: [],
};
