
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1a1a1a', // Dark background
          light: '#ffffff', // Light background
        },
        text: {
          DEFAULT: '#ffffff', // Light text
          dark: '#000000', // Dark text
        },
      },
    },
  },
  plugins: [],
};
