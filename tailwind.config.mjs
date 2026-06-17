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
        ink: "#17201a",
        mist: "#f7f8f5"
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
