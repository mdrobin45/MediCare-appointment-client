import { BsArrowRight, BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AboutRight = () => {
   return (
      <div>
         <h3 className="text-md md:text-xl text-secondary font-semibold">
            About Us
         </h3>
         <h1 className="text-3xl lg:text-4xl font-bold py-6">
            The Great Place Of Medical <br /> Hospital Center.
         </h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum susp endisse ultrices gravida tempor incididu ut labore et
            dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pt-6">
            <div className="flex my-2 items-center gap-3">
               <BsFillPatchCheckFill className="text-primary text-xl" />
               <p>Ambulance Services</p>
            </div>
            <div className="flex items-center gap-3">
               <BsFillPatchCheckFill className="text-primary text-xl" />
               <p>Oxizen On Wheel</p>
            </div>
            <div className="flex items-center gap-3">
               <BsFillPatchCheckFill className="text-primary text-xl" />
               <p>Pharmacy On Clinic</p>
            </div>
            <div className="flex items-center gap-3">
               <BsFillPatchCheckFill className="text-primary text-xl" />
               <p>On Duty Doctors</p>
            </div>
            <div className="flex items-center gap-3">
               <BsFillPatchCheckFill className="text-primary text-xl" />
               <p>24/7 Medical Emergency</p>
            </div>
         </div>
         <Link
            to="#"
            className="text-white my-6 bg-primary transition-all border border-primary focus:outline-none font-medium rounded-lg text-md px-3 py-2 text-center inline-flex items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
            Read More
            <BsArrowRight className="text-md ml-2" />
         </Link>
      </div>
   );
};

export default AboutRight;
