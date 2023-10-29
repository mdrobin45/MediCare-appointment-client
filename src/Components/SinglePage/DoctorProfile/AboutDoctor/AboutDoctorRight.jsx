import { BiMessageRounded } from "react-icons/bi";
import { BsBookmark, BsTelephone } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutDoctorRight = ({ doctor }) => {
   const { feedback, location, price } = doctor;
   return (
      <div className=" w-1/5">
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
         <div className="flex items-center gap-2 py-2">
            <button className="border p-3 rounded">
               <BsBookmark />
            </button>
            <button className="border p-3 rounded">
               <FiMessageSquare />
            </button>
            <button className="border p-3 rounded">
               <BsTelephone />
            </button>
            <button className="border p-3 rounded">
               <GoDeviceCameraVideo />
            </button>
         </div>
         <Link
            to={`/booking/`}
            className="w-full mt-3 block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
            Book Appointment
         </Link>
      </div>
   );
};

export default AboutDoctorRight;
