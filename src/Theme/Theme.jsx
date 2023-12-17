import { createTheme } from "@mui/material";

const theme = createTheme({
   palette: {
      primary: {
         main: "#007bff",
      },
      secondary: {
         main: "#15c4d7",
      },
   },
   typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
   },
   components: {
      MuiButton: {
         variants: [
            {
               props: { variant: "custom" },
               style: {
                  textTransform: "capitalize",
                  background: "#007bff",
                  color: "white",
                  fontWeight: "400",
                  "&:hover": {
                     background: "#007bff",
                  },
               },
            },
         ],
      },
   },
});

export default theme;
