import About from "../../Containers/HomeContainers/About/About";
import Banner from "../../Containers/HomeContainers/Banner/Banner";
import Doctors from "../../Containers/HomeContainers/Doctors/Doctors";
import Services from "../../Containers/HomeContainers/Services/Services";

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
