/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#1136F1",
            secondary: "#15c4d7",
         },
      },
   },
   plugins: [],
};
