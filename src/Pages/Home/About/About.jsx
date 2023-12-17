import { Container, Grid } from "@mui/material";
import AboutLeft from "./AboutLeft/AboutLeft";
import AboutRight from "./AboutRight/AboutRight";

const About = () => {
   return (
      <Container maxWidth="lg">
         <Grid container spacing={2}>
            <Grid item md={6}>
               <AboutLeft />
            </Grid>
            <Grid item md={6}>
               <AboutRight />
            </Grid>
         </Grid>
      </Container>
   );
};

export default About;
