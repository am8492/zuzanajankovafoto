/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonSendEmail: "#f8f1ee",
        foreground: "var(--foreground)",
        colorPrimary: "#f8f1ee",
      },
    },
  },
  plugins: [],
};
//HEX: #f8f1ee pozadi stranek
//HEX: #0c0802 barva textu
