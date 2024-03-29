import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'orange-glow': '0 0 24px 0px rgba(249, 115, 22, 0.3)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        radius: {
        },
      }, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#f8fafc", // or DEFAULT
            foreground: "#020617", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#fff",
              DEFAULT: "#f97316",
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#020617", // or DEFAULT
            foreground: "#f8fafc", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#fff",
              DEFAULT: "#f97316",
            },
            secondary: { //Tailwind Blue
              900: "#1e3a8a",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
