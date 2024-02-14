/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F6FF",
        secondary: "#06080c",
        "light-purple": "#BCA5FF",
        "water-blue": "#214D76",
      },
      maxWidth: {
        container: "1210px",
      },
      blur: {
        "3.5xl": "76px",
        "4xl": "100px",
      },
      width: {
        "overflow-width": "calc(100% + 20px)",
      },
      backgroundImage: {
        gradientText: "linear-gradient(to right,#33BBCF,#DEF9FA)"
      },
    },
  },
  plugins: [],
};
