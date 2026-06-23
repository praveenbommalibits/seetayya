export const themeTokens = {
  colors: {
    page: "#fbf7ef",
    paper: "#fffdf8",
    ink: "#17201a",
    mutedInk: "#526055",
    saffron: "#d9861f",
    terracotta: "#a9472f",
    leaf: "#256331",
    indigo: "#273761",
    sand: "#efe1c8",
    focus: "#e89525"
  },
  typography: {
    sans: "Inter, Noto Sans Telugu, ui-sans-serif, system-ui, sans-serif",
    telugu: "Noto Sans Telugu, Inter, ui-sans-serif, system-ui, sans-serif",
    bodyMinPx: 16
  },
  spacing: {
    pageX: "clamp(1rem, 4vw, 2rem)",
    sectionY: "clamp(3.5rem, 8vw, 6.5rem)"
  },
  radius: {
    card: "8px",
    control: "8px",
    image: "8px"
  }
} as const;
