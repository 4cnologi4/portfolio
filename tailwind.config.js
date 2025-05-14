const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;