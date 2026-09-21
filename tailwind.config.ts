import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: "#2196D4",
          deep: "#1476A8",
        },
        magenta: {
          DEFAULT: "#E6157C",
          deep: "#C4106A",
        },
        navy: "#0E3A5C",
        cream: "#FDFBF6",
        ink: "#12293D",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
    },
  },
  plugins: [],
};
export default config;
