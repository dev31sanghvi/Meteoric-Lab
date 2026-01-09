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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'card-bg': "var(--card-bg)",
        'border-color': "var(--border)",
        'accent': "var(--accent)",
        'accent-hover': "var(--accent-hover)",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Sora', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
