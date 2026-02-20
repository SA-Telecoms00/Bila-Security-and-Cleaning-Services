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
        dark: {
          DEFAULT: "#0F1117",
          50:  "#1A1F2B",
          100: "#12141C",
          200: "#181C26",
          300: "#1E2330",
          400: "#252A38",
        },
        accent: {
          blue:  "#2D6BFF",
          green: "#00E38C",
          cyan:  "#00B8FF",
        },
        surface: "#181C26",
        primary: "#F4F7FF",
        muted:   "#A3ADC2",
        border:  "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #2D6BFF 0%, #00E38C 60%, #00B8FF 100%)",
        "glow-blue":
          "radial-gradient(circle, rgba(45,107,255,0.15) 0%, transparent 70%)",
        "glow-green":
          "radial-gradient(circle, rgba(0,227,140,0.12) 0%, transparent 70%)",
        "glow-cyan":
          "radial-gradient(circle, rgba(0,184,255,0.10) 0%, transparent 70%)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(45,107,255,0.15), 0 0 80px rgba(0,227,140,0.08)",
        "glow-sm": "0 0 20px rgba(45,107,255,0.12)",
        "glow-accent": "0 0 30px rgba(0,227,140,0.2), 0 0 60px rgba(45,107,255,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
