/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F5E0E5",
          200: "#F5A3B7",
        },
      },
      backgroundImage: {
        banner: "url('../src/media/banner.png')",
      },
    },
  },
  plugins: [],
};
