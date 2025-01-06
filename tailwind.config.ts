import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        estedad: ["var(--font-estedad)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
