import { Box } from "@mui/material";

const Container = ({ children }) => {
   return <Box sx={{ maxWidth: "1600px", px: "16px" }}>{children}</Box>;
};

export default Container;
