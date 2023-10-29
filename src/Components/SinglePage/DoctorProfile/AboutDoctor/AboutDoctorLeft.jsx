import { AiTwotoneStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const AboutDoctorLeft = ({ doctor }) => {
   const { name, photoURL, tagline, speciality, feedback, location, services } =
      doctor;
   return (
      <div className="flex gap-3 w-3/4">
         <div>
            <img className=" w-52 rounded-md" src={photoURL} alt="Doctor" />
         </div>
         <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{tagline}</p>
            <span className="text-primary py-2 block">{speciality.name}</span>
            <div className="flex items-center gap-2 pb-3">
               <div className="flex items-center gap-1">
                  <AiTwotoneStar className="text-yellow-500 text-xl" />
                  <AiTwotoneStar className="text-yellow-500 text-xl" />
                  <AiTwotoneStar className="text-yellow-500 text-xl" />
                  <AiTwotoneStar className="text-yellow-500 text-xl" />
                  <AiTwotoneStar className="text-yellow-500 text-xl" />
               </div>
               <span>({feedback})</span>
            </div>
            <div className="flex items-center gap-1 pb-2">
               <IoLocationSharp className="text-gray-400 text-xl" />
               <p>{location}</p>
            </div>
            <div className="flex items-center gap-2">
               {services.map((service, id) => (
                  <p key={id} className="border py-1 px-2 text-sm rounded-md">
                     {service}
                  </p>
               ))}
            </div>
         </div>
      </div>
   );
};

export default AboutDoctorLeft;
