/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      
        purple: "#A445ED",
        purplealpha: "#A445ED40",
        red: "#FF5252",
        blackvariant1: "#050505",
        blackvariant2:" #1F1F1F",
        blackvariant3: "#2D2D2D",
        lackvariant4: "#3A3A3A",
        greyvariant1: "#757575",
        greyvariant2: "#E9E9E9",
        greyvariant3: "#F4F4F4",
        greyvarianttransparent: "#0000001A",
        white: "#FFFFFF",
      },
      boxShadow: {
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Inconsolata', 'monospace']
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
};

