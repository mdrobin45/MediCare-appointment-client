import { Box } from "@mui/material";
import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

const Banner = () => {
   return (
      <Box
         style={{
            background: `linear-gradient(0deg,rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(https://preview.colorlib.com/theme/drcare/images/bg_1.jpg.webp)`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
         className="py-32">
         <Box sx={{
            display:'flex',
            
         }} className="flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-6 lg:px-8">
            <BannerLeft />
            <BannerRight />
         </Box>
      </Box>
   );
};

export default Banner;
