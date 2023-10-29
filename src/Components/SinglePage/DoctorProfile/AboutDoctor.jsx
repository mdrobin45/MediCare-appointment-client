import { AiTwotoneStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutDoctor = () => {
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2 w-3/4">
            <div>
               <img
                  src="https://doccure.dreamguystech.com/react/template/bc4e8d916b11472fc805.jpg"
                  alt="Doctor"
               />
            </div>
            <div>
               <h2 className="text-2xl font-bold">Dr. Darren Elder</h2>
               <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
               <span className="text-primary py-2 block">Dentist</span>
               <div className="flex items-center gap-2 pb-3">
                  <div className="flex items-center gap-1">
                     <AiTwotoneStar className="text-yellow-500 text-xl" />
                     <AiTwotoneStar className="text-yellow-500 text-xl" />
                     <AiTwotoneStar className="text-yellow-500 text-xl" />
                     <AiTwotoneStar className="text-yellow-500 text-xl" />
                     <AiTwotoneStar className="text-yellow-500 text-xl" />
                  </div>
                  <span>(32)</span>
               </div>
               <div className="flex items-center gap-1 pb-2">
                  <IoLocationSharp className="text-gray-400 text-xl" />
                  <p>Newyork, USA</p>
               </div>
               <div className="flex items-center gap-2">
                  <p className="border py-1 px-2 text-sm rounded-md">
                     Dental Fillings
                  </p>
                  <p className="border py-1 px-2 text-sm rounded-md">
                     Dental Fillings
                  </p>
               </div>
            </div>
         </div>
         <div className=" w-3/12">
            <div className="flex items-center gap-1 pb-2">
               <IoLocationSharp className="text-gray-400 text-xl" />
               <p>Newyork, USA</p>
            </div>
            <div className="flex items-center gap-1 pb-2">
               <IoLocationSharp className="text-gray-400 text-xl" />
               <p>Newyork, USA</p>
            </div>
            <div className="flex items-center gap-1 pb-2">
               <IoLocationSharp className="text-gray-400 text-xl" />
               <p>Newyork, USA</p>
            </div>
            <Link
               to={`/booking/`}
               className="w-full block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
               Book Appointment
            </Link>
         </div>
      </div>
   );
};

export default AboutDoctor;
