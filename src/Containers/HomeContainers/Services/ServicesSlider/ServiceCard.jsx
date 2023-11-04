import { BsArrowRight } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = () => {
   return (
      <div className="bg-white rounded-xl p-4">
         <div className="relative">
            <img
               className="rounded-xl w-full"
               src="https://html.themefax.com/madifax/images/service-2.jpg"
               alt="Image"
            />
            <span className=" absolute -bottom-6 right-6 bg-[#F7588D] p-2 rounded-xl">
               <FaCapsules className="text-white text-4xl" />
            </span>
         </div>

         <h2 className="text-2xl font-bold py-3">Diagnose & Research</h2>
         <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem
            quia officia quaerat ipsam hic sunt quaerat!
         </p>
         <Link className="text-primary flex items-center gap-2" to="/">
            Read More <BsArrowRight />
         </Link>
      </div>
   );
};

export default ServiceCard;
