import { Container, Grid } from "@mui/material";
import AboutLeft from "./AboutLeft/AboutLeft";
import AboutRight from "./AboutRight/AboutRight";

const About = () => {
   return (
      <Container sx={{ py: "5rem" }} maxWidth="lg">
         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <AboutLeft />
            </Grid>
            <Grid item xs={12} md={6}>
               <AboutRight />
            </Grid>
         </Grid>
      </Container>
   );
};

export default About;
