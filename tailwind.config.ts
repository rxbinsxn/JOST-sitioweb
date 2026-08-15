import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        charcoal: "#111111",
        champagne: "#C8A96B",
        champagneLight: "#E6D3A3",
        warmWhite: "#F5F2EA",
        burgundy: "#3A0D18",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "champagne-radial":
          "radial-gradient(circle, rgba(200,169,107,0.55) 0%, rgba(200,169,107,0.12) 35%, rgba(5,5,5,0) 70%)",
        "grain": "url('/noise.png')",
      },
      boxShadow: {
        gold: "0 0 40px rgba(200,169,107,0.25)",
        goldSm: "0 0 16px rgba(200,169,107,0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
