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
        "c-black": "#272727",
        "s-c-black": "#393939",
      },
      maxWidth: {
        container: "1210px",
      },
      blur: {
        "3.5xl": "90px",
        "4xl": "150px",
      },
      width: {
        "overflow-width": "calc(100% + 20px)",
      },
      backgroundImage: {
        gradientText: "linear-gradient(to right,#33BBCF,#DEF9FA)",
        bgGradient: "linear-gradient(to bottom right, #214D76, #06080c)",
      },
      padding: {
        0.5: "1.5px",
      },
      borderRadius: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
