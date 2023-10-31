/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/react-tailwindcss-datetimepicker/dist/react-tailwindcss-datetimepicker.js",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#007bff",
            secondary: "#15c4d7",
         },
      },
   },
   plugins: [],
});
