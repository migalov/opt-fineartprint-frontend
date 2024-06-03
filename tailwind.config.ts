import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "h1": "1.7em",
        "h2": "1.42em",
        "h3": "1.14em",
        "message": "0.85em"
      }
    },
    colors: {
      "primary": "#78dcc7",
      "blue": "#2d58a7",
      "yellow": "#fee278",
      "red": "#ee6867",
      "gray": "#f0f0f0",
      "green": "#00C37D",
      "white": "#fff",
      "black": "#000",
      "dark-gray": "#d9d9d9",
      "ui-blue": "#266ef1",
      "add-blue": "#2d58a7",
      "transparent": "transparent"
    },
    boxShadow: {
      "default": "0 4px 15px 0 rgba(0, 0, 0, 0.2);"
    },
    borderRadius: {
      "5": "5px",
      "8": "8px",
      "12": "12px",
      "15": "15px"
    }
  }
};
export default config;
