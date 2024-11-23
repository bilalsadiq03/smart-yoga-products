/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5DC",
        textPrimary: "#333333",
        textSecondary: "#666666",
        borderColor: "#D3D3D3",
        forestGreen: "#378537"

      },
    },
  },
  plugins: [],
};
