import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        mint: "#ECFDF5",
        accent: "#14B8A6",
        ink: "#1E293B",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.08)" },
          "66%": { transform: "translate(-15px,15px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
