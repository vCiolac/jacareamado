import type { Config } from "tailwindcss";

// Paleta do briefing de redesign. As variações "deep" existem para garantir
// contraste AA quando a cor é usada em texto pequeno ou como fundo de botão.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: "#15ADD0", // ciano
          deep: "#0B7896",
        },
        magenta: {
          DEFAULT: "#E62D73", // rosa
          deep: "#C81E5E",
          darker: "#A8184F",
        },
        navy: "#0D4A78", // azul principal
        cream: "#FBF8F3", // base clara
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
