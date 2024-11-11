import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        // blink: {
        //   "0%, 100%": { opacity: "1" },
        //   "50%": { opacity: "0" },
        // },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 0.5s ease-out forwards",
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        // blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
