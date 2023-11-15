import About from "../../Containers/Home/About/About";
import Banner from "../../Containers/Home/Banner/Banner";
import Doctors from "../../Containers/Home/Doctors/Doctors";
import Services from "../../Containers/Home/Services/Services";

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
