import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: "#0B0B0B",
        gold: {
          DEFAULT: "#C5A572",
          500: "#C5A572",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      },
    },
  },
};
