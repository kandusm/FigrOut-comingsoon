import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007C8A",
        accent: "#222222",
        highlight: "#FFFFFF",
        secondary: "#D7E5E8",
        bildout: "#8B0E0E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
