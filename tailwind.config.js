/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "background-secondary": "var(--background-secondary-color)",
        "secondary-color": "var( --text-secondary-color)",
        "background-primary": "var( --background-primary-color)",
        subtle: "var(--otter-subtle)",
        "btn-primary-color": "var(--button-primary-background-color)",
        "btn-secondary-color": "var(--button-secondary-background-color)",
        "btn-primary-hover": "var(--button-primary-hover)",
        "background-navbar": "var(--background-navbar)",
      },
      maxWidth: {
        1800: "1800px",
      },
    },
  },
  plugins: [],
};
