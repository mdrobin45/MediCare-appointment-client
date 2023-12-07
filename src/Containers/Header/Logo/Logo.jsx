import AdbIcon from "@mui/icons-material/Adb";
import { Box, Typography } from "@mui/material";

const Logo = () => {
   return (
      <Box className="text-white font-bold flex" sx={{ width: "10%" }}>
         <AdbIcon className="text-3xl" />
         <Typography
            className="text-3xl"
            sx={{ textTransform: "uppercase", color: "white" }}>
            MediCare
         </Typography>
      </Box>
   );
};

export default Logo;
