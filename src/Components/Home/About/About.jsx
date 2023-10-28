import AboutLeft from "./AboutLeft/AboutLeft";
import AboutRight from "./AboutRight/AboutRight";

const About = () => {
   return (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-20 px-2 sm:px-6 lg:px-8">
         <AboutLeft />
         <AboutRight />
      </div>
   );
};

export default About;
