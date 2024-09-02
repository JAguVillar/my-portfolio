/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      // Custom utility classes
      textColor: {
        "content-theme": "var(--color-content-theme)", // placeholder if you need more customization
      },
      opacity: {
        "content-theme": "var(--opacity-content-theme)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".content-theme": {
          "@apply dark:text-gray-800 opacity-80 dark:opacity-100": {},
        },
      });
    },
  ],
};
