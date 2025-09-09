import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obBlue: "#59B7FF", // punto azul claro
        obDark: "#0E1B2B"
      }
    },
  },
  plugins: [],
};
export default config;