const {
  themeVariants,
  prefersLight,
  prefersDark,
} = require("tailwindcss-theme-variants");
module.exports = {
  darkMode: "class",
  // lightMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 8s linear infinite",
        "bounce-slow": "bounce 6s linear infinite",
        "fade-in-up": "fadeIn .4s ease-in-out ",
        "fade-in-up-container": "fadeIn .8s ease-in-out ",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    themeVariants({
      themes: {
        light: {
          mediaQuery: prefersLight /* "@media (prefers-color-scheme: light)" */,
        },
        dark: {
          mediaQuery: prefersDark /* "@media (prefers-color-scheme: dark)" */,
        },
      },
    }),

    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
