const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#09090B",
        primary: {
          DEFAULT: "#18181B",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#3F3F46",
          foreground: "#FAFAFA",
        },
        accent: {
          DEFAULT: "#2563EB",
          foreground: "#FAFAFA",
        },
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
