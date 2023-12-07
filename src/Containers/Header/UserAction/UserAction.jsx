import {
   Avatar,
   Box,
   Button,
   IconButton,
   Menu,
   MenuItem,
   MenuList,
   Paper,
   Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

// Dropdown links
const dropdown = [
   {
      text: "Dashboard",
      link: "/dashboard",
   },
   {
      text: "My Profile",
      link: "/about",
   },
   {
      text: "Logout",
      link: "/doctors",
   },
];

const UserAction = () => {
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };
   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };
   return (
      <Box sx={{ flexGrow: 0 }}>
         <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
         </Tooltip>
         <Menu
            sx={{ mt: "45px", "& .MuiMenu-list": { paddingBottom: 0 } }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            <Paper>
               <MenuList>
                  {dropdown.map((item, index) => (
                     <MenuItem key={index} sx={{ p: 0 }}>
                        <Button
                           onClick={handleCloseUserMenu}
                           component={ReactLink}
                           to={item.link}
                           sx={{
                              width: "100%",
                              justifyContent: "start",
                              pl: "16px",
                              px: "20px",
                              color: "inherit",
                              textTransform: "capitalize",
                              fontSize: "17px",
                           }}>
                           {item.text}
                        </Button>
                     </MenuItem>
                  ))}
               </MenuList>
            </Paper>
         </Menu>
      </Box>
   );
};

export default UserAction;
