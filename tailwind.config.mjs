/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        "light-orange": "#FFE597",
        "light-green": "#AAFF82",
        "dark-purple-100": "#733CC4",
        "dark-purple-200": "#2A095A",
        "dark-purple-300": "#12002D",
        "dark-purple-400": "#DBA6F4",
        "dark-purple-500": "#A981FE",
        "dark-purple-600": "#6E37BD",
        "gray-100": "#8486B194",
        "light-gray": "#ECECEC",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        dmSans: ['"DM Sans"', "sans-serif"],
      },
      gridTemplateColumns: {
        header: "1fr 4fr",
      },
      backgroundImage: {
        "imperfect-line": "url('src/assets/images/icons/imperfect_line.svg')",
        "colored-imperfect-line":
          "url('src/assets/images/icons/colored_imperfect_line.svg')",
        star: "url('src/assets/images/icons/star.svg')",
        swirl: "url('src/assets/images/icons/swirl.svg')",
      },
      keyframes: {
        draw: {
          "0%": {
            strokeDasharray: "1500",
            strokeDashoffset: "1500",
            fill: "transparent",
          },
          "100%": {
            strokeDashoffset: "0",
            fill: "#fff",
          },
        },
      },
      animation: {
        draw: "draw 3s linear forwards",
      },
    },
  },
  plugins: [],
};
