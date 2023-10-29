import { AiTwotoneStar } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
   const { name, photoURL, tagline, feedback, verified, location, price } =
      doctor;
   return (
      <div className="p-3 rounded-md border">
         <img className="rounded-md" src={photoURL} alt="Doctor" />
         <div className="flex items-center gap-2">
            <h2 className="text-xl pt-3 pb-2 font-bold">{name}</h2>
            {verified && <RiVerifiedBadgeFill className="text-primary" />}
         </div>

         <p>{tagline}</p>
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
         <div className="flex items-center gap-1 pb-2">
            <BsStopwatch className="text-gray-400 text-md" />
            <p>Available on Fri, 22 Mar</p>
         </div>
         <div className="flex items-center gap-1 pb-2">
            <FaRegMoneyBillAlt className="text-gray-400 text-md" />
            <p>${price}</p>
         </div>
         <div className="flex items-center justify-between gap-2">
            <Link
               to="/"
               className="w-2/4 text-center text-md border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white rounded-md py-1 px-2">
               View Profile
            </Link>
            <Link
               to="/"
               className="w-2/4 text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-1 px-2">
               Book Now
            </Link>
         </div>
      </div>
   );
};

export default DoctorCard;
