/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      // Tokens semánticos alimentados por variables CSS (ver Layout.astro).
      // Evitan repetir `dark:` en cada texto y garantizan un único acento.
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        strong: "hsl(var(--text-strong) / <alpha-value>)",
        body: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--text-muted) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-strong": "hsl(var(--accent-strong) / <alpha-value>)",
        line: "hsl(var(--border) / <alpha-value>)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
