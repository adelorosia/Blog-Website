/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Dracula Theme
        BACKGROUND: "#282a36",
        FOREGROUND: "#f8f8f2",
        CURRENTLINE: "#44475a",
        COMMENT: "#6272a4",
        CYAN: "#8be9fd",
        GREEN: "#50fa7b",
        ORANGE: "#ffb86c",
        PINK: "#ff79c6",
        PURPLE: "#bd93f9",
        RED: "#ff5555",
        YELLOW: "#f1fa8c",
      },
      fontFamily: {
        Poppins: "Poppins",
        Righteous: "Righteous",
        Josefin: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
