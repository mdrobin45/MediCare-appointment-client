import About from "./About/About";
import Banner from "./Banner/Banner";
import Doctors from "./Doctors/Doctors";
import Services from "./Services/Services";

const Home = () => {
   return (
      <div>
         <Banner />
         <About />
         <Services />
         <Doctors />
      </div>
   );
};

export default Home;
