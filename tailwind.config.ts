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
        background: "#f0ede6",
        paper: "#fefcf8",
        ink: "#2c2c2c",
        "ink-light": "#5a6c7d",
        accent: "#5a6c7d",
        "accent-brown": "#8b7355",
        line: "#e8e6e1",
      },
      fontFamily: {
        heading: ["Nothing You Could Do", "cursive"],
        body: ["Kalam", "cursive"],
        serif: ["Kalam", "cursive"],
        logo: ["Righteous", "cursive"],
      },
      maxWidth: {
        reading: "42rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

