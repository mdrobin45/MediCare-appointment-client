import { Box } from "@mui/material";

const AboutLeft = () => {
   return (
      <Box sx={{ position: "relative" }}>
         <Box sx={{ width: "25rem", padding: "1rem" }}>
            <Box
               component="img"
               sx={{ height: 400, width: 350, borderRadius: "10px" }}
               src="https://html.themefax.com/madifax/images/about-img1.jpg"
               alt="Image"
            />
         </Box>
      </Box>
   );
};

export default AboutLeft;
