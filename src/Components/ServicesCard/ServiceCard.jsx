import { Box, Button, Typography } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = () => {
   return (
      <Box sx={{ background: "white", borderRadius: "10px", padding: "20px" }}>
         <Box sx={{ position: "relative" }}>
            <Box
               component="img"
               sx={{ borderRadius: "10px", width: "100%" }}
               src="https://html.themefax.com/madifax/images/service-2.jpg"
               alt="Image"
            />
            <Box
               sx={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "1.5rem",
                  bgcolor: "#F7588D",
                  padding: "10px",
                  borderRadius: "10px",
               }}>
               <FaCapsules className="text-white text-4xl" />
            </Box>
         </Box>

         <Typography
            variant="h2"
            sx={{ fontSize: "20px", fontWeight: "bold", py: "10px" }}>
            Diagnose & Research
         </Typography>
         <Typography variant="body" className="pb-3">
            Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
            quia officia quaerat ipsam hic sunt quaerat!
         </Typography>
         <Button sx={{ mt: "5px" }} variant="text" component={Link} to="/">
            Read More <BsArrowRight />
         </Button>
      </Box>
   );
};

export default ServiceCard;
