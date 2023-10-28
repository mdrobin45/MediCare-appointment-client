import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import Doctors from "../../Components/Home/Doctors/Doctors";
import Services from "../../Components/Home/Services/Services";

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
