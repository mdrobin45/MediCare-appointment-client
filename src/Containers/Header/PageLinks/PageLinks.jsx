import { Box, Button, ButtonGroup } from "@mui/material";
import { NavLink as ReactLink } from "react-router-dom";

// List of pages
const pages = [
   {
      text: "Home",
      link: "/",
   },
   {
      text: "About",
      link: "/about",
   },
   {
      text: "Doctors",
      link: "/doctors",
   },
];

const PageLinks = () => {
   return (
      <Box
         sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
         }}>
         <ButtonGroup sx={{ gap: "10px" }}>
            {pages.map((page, index) => (
               <Button
                  key={index}
                  sx={{
                     color: "white",
                     fontWeight: "400",
                     "&.active": {
                        bgcolor: "primary.light",
                        borderRadius: "5px",
                     },
                  }}
                  component={ReactLink}
                  to={page.link}
                  variant="text">
                  {page.text}
               </Button>
            ))}
         </ButtonGroup>
      </Box>
   );
};

export default PageLinks;
