import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // por si tienes fuera de /src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E2149",   // títulos / primario
          sand: "#F7F7F7",   // fondo cálido general
          paper: "#FFFFFF",  // tarjetas
          line: "#E5E7EB",   // bordes sutiles
          gold: "#D4AF37",   // acento premium
          text: "#0F172A",   // texto principal
          mute: "#64748B",   // texto secundario
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.04)",
        cardHover: "0 16px 40px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "sunrise-blur":
          "radial-gradient(120% 120% at 0% 0%, rgba(212, 175, 55, 0.18) 0%, rgba(247, 242, 235, 0) 45%), radial-gradient(120% 120% at 100% 0%, rgba(14, 33, 73, 0.08) 0%, rgba(247, 242, 235, 0.12) 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
