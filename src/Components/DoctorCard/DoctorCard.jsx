import { BsStopwatch } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Rate } from "rsuite";
import "./style.css";

const DoctorCard = ({ doctor }) => {
   const {
      _id,
      name,
      photoURL,
      tagline,
      feedback,
      ratings,
      verified,
      location,
      price,
   } = doctor;
   return (
      <div className="border flex flex-col justify-between p-3 rounded-md">
         <img className="rounded-md" src={photoURL} alt="Doctor" />
         <div className="flex items-center gap-2">
            <h2 className="text-xl pt-3 pb-2 font-bold">{name}</h2>
            {verified && <RiVerifiedBadgeFill className="text-primary" />}
         </div>

         <p>{tagline}</p>
         <div className="flex items-center gap-2 pb-3">
            <div className="flex items-center gap-1">
               <Rate
                  className="docRatingCard"
                  size="xs"
                  readOnly
                  defaultValue={ratings}
                  allowHalf
               />
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
         <div className="flex mt-4 items-center justify-center">
            <Link
               to={`/doctors/${_id}`}
               className="w-2/4 text-center text-md border-2 border-secondary text-secondary mt-auto bg-transparent hover:bg-secondary hover:text-white rounded-md py-1 px-2">
               View Profile
            </Link>
         </div>
      </div>
   );
};

export default DoctorCard;
