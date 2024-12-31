/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      boxShadow: {
        circle: "0px -60px 100px -70px #733CC4",
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
        "dark-purple-700": "#12002E",
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
        "imperfect-line": "url('/icons/imperfect_line.svg')",
        "colored-imperfect-line": "url('/icons/colored_imperfect_line.svg')",
        star: "url('/icons/star.svg')",
      },
      keyframes: {
        draw: {
          "0%": {
            strokeDasharray: "1500",
            strokeDashoffset: "1500",
            fill: "transparent",
            stroke: "#fff",
          },
          "100%": {
            strokeDashoffset: "0",
            fill: "#fff",
          },
        },
        "pulse-border": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 8px #88FF88, 0 0 16px #44FF44" },
          "50%": { textShadow: "0 0 16px #88FF88, 0 0 32px #44FF44" },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        shine: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2px gold) drop-shadow(0 0 4px gold)",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px gold) drop-shadow(0 0 16px gold)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "bg-slide-right": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "100% 0%",
          },
        },
      },
      animation: {
        draw: "draw 3s linear 1s forwards",
        appear: "appear 1s ease-out forwards",
        shine: "appear 1s ease-out forwards, shine infinite ease-in-out 1s",
        "pulse-border": "pulse-border 1.5s infinite",
        "text-glow": "text-glow 1.5s infinite",
        "text-glow-2": "text-glow 1.5s forwards",
        skill: "pulse-border 1.5s infinite, text-glow 1.5s infinite",
        "slide-right": "slide-right 1s ease-out forwards",
        "slide-left": "slide-left 1s ease-out forwards",
        "bg-slide-right": "bg-slide-right 1s ease-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
        },
        ".text-stroke-gradient": {
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
