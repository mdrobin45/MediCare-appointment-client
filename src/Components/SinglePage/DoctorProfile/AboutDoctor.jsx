import { AiTwotoneStar } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutDoctor = ({ doctor }) => {
   const { name, tagline, speciality, feedback, location, services, price } =
      doctor;
   return (
      <div className="flex items-center justify-between border p-6 mt-16 rounded-md">
         <div className="flex items-center gap-3 w-3/4">
            <div>
               <img
                  className=" w-52 rounded-md"
                  src="https://doccure.dreamguystech.com/react/template/bc4e8d916b11472fc805.jpg"
                  alt="Doctor"
               />
            </div>
            <div>
               <h2 className="text-2xl font-bold">{name}</h2>
               <p>{tagline}</p>
               <span className="text-primary py-2 block">
                  {speciality.name}
               </span>
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
                     <p
                        key={id}
                        className="border py-1 px-2 text-sm rounded-md">
                        {service}
                     </p>
                  ))}
               </div>
            </div>
         </div>
         <div className=" w-3/12">
            <div className="flex items-center gap-1 pb-2">
               <BiMessageRounded className="text-gray-400 text-xl" />
               <p>{feedback} feedback</p>
            </div>
            <div className="flex items-center gap-1 pb-2">
               <IoLocationSharp className="text-gray-400 text-xl" />
               <p>{location}</p>
            </div>
            <div className="flex items-center gap-1 pb-2">
               <FaRegMoneyBillAlt className="text-gray-400 text-xl" />
               <p>${price} per visit</p>
            </div>
            <Link
               to={`/booking/`}
               className="w-full mt-3 block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
               Book Appointment
            </Link>
         </div>
      </div>
   );
};

export default AboutDoctor;
