import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./Logo/Logo";
import PageLinks from "./PageLinks/PageLinks";
import UserAction from "./UserAction/UserAction";

const Header = () => {
   return (
      <>
         <AppBar>
            <Container maxWidth="xl">
               <Toolbar
                  disableGutters
                  sx={{
                     display: "flex",
                     justifyItems: "center",
                     justifyContent: "space-between",
                  }}>
                  <Logo />
                  <PageLinks />
                  <UserAction />
               </Toolbar>
            </Container>
         </AppBar>
      </>
   );
};

export default Header;
