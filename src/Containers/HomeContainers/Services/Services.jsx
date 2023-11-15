import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
   return (
      <div
         style={{
            backgroundImage: `linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(https://html.themefax.com/madifax/images/service_bg.jpg)`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}
         className="py-16">
         <div className="px-2 sm:px-6 lg:px-8">
            <SectionHeader
               title="Our Medical Services"
               subtitle="Our Services"
            />
            <ServicesSlider />
         </div>
      </div>
   );
};

export default Services;
