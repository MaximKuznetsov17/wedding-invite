import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Minimal / Editorial Wedding token system
        cream: "#F7F2E9",      // primary background — warm parchment
        parchment: "#EFE6D6",  // alternate section background
        espresso: "#3A2E22",   // primary ink / headings
        cocoa: "#6E5C48",      // secondary text
        taupe: "#9C8B74",      // muted / captions
        bronze: "#A9814C",     // fine accent — rules, monogram, timer
        hairline: "#DCCFB6",   // borders and dividers
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-garamond)", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      maxWidth: {
        prose2: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
