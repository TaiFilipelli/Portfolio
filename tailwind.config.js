import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      fontFamily: {
        unisonBold:['Unison Pro Bold','sans-serif'],
        unisonBoldIthalic:['Unison Pro Bold Italic','sans-serif'],
        unisonIthalic:['Unison Pro Light Italic','sans-serif'],
        unisonLight:['Unison Pro Light','sans-serif']
      },
      height:{
        '80vh':'80vh'
      }
    },
  },
};


