/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#007bff",
            secondary: "#15c4d7",
         },
      },
   },
   plugins: [],
};
