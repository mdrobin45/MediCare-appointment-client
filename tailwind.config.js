/** @type {import('tailwindcss').Config} */

export default {
   corePlugins: {
      preflight: false,
   },
   important: "#root",
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
