import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const BannerLeft = () => {
   return (
      <Box className="w-full md:w-2/4">
         <Typography sx={{ color: "primary.main" }} variant="subtitle">
            Welcome to MadiCare
         </Typography>
         <Typography sx={{ fontWeight: "bold" }} variant="h2">
            We Are{" "}
            <Typography
               variant="h2"
               sx={{ color: "primary.main", fontWeight: "bold" }}>
               Committed
            </Typography>{" "}
            To Your Health
         </Typography>
         <Typography variant="body1">
            It is a established fact that a reader will be distracted by the
            content of a page when looking at this layout.
         </Typography>
         <Button
            sx={{ mt: 1 }}
            component={RouterLink}
            to="/about"
            variant="custom">
            Meet Doctor
         </Button>
         {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left py-4">
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">355k+</h2>
               <p>Recovered Patients</p>
            </div>
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">98%</h2>
               <p>Good Review</p>
            </div>
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">120+</h2>
               <p>Popular Doctors</p>
            </div>
         </div> */}
      </Box>
   );
};

export default BannerLeft;
