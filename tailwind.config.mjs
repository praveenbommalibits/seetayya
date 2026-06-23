export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#eef8ed",
          100: "#d8eed5",
          500: "#3f8f47",
          700: "#256331",
          900: "#14391d"
        },
        saffron: {
          50: "#fff6e6",
          100: "#ffe6b8",
          500: "#e89525",
          700: "#a76013"
        },
        terracotta: {
          50: "#fff1ec",
          500: "#b65237",
          700: "#8c3527"
        },
        indigo: {
          50: "#edf0fb",
          600: "#31406f",
          800: "#273761"
        },
        sand: {
          50: "#fffaf0",
          100: "#f5e9d2",
          200: "#ead5ad"
        },
        ink: "#17201a",
        mist: "#fbf7ef",
        paper: "#fffdf8"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans Telugu",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 14px 40px rgba(23, 32, 26, 0.10)"
      }
    }
  },
  plugins: []
};
