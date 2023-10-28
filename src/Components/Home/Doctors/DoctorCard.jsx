import { AiTwotoneStar } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const DoctorCard = ({ doctor }) => {
   const { name, photoURL, tagline, feedback, verified } = doctor;
   return (
      <div className="p-3 rounded-md border">
         <img className="rounded-md" src={photoURL} alt="Doctor" />
         <div className="flex items-center gap-2">
            <h2 className="text-xl pt-3 pb-2 font-bold">{name}</h2>
            {verified && <RiVerifiedBadgeFill className="text-primary" />}
         </div>

         <p>{tagline}</p>
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
               <AiTwotoneStar className="text-yellow-500 text-xl" />
               <AiTwotoneStar className="text-yellow-500 text-xl" />
               <AiTwotoneStar className="text-yellow-500 text-xl" />
               <AiTwotoneStar className="text-yellow-500 text-xl" />
               <AiTwotoneStar className="text-yellow-500 text-xl" />
            </div>
            <span>({feedback})</span>
         </div>
      </div>
   );
};

export default DoctorCard;
