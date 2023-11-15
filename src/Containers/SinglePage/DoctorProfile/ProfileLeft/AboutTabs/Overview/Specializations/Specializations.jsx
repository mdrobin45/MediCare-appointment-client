import { BiPlusMedical } from "react-icons/bi";

const Specializations = ({ doctor }) => {
   const { specializations } = doctor;
   return (
      <div className="lg:max-w-screen-xl md:max-w-full mx-auto pt-10 sm:max-w-xl">
         <h2 className="text-xl font-bold text-black pb-6">Specializations</h2>
         <div className="grid grid-cols-3 gap-y-3">
            {specializations.map((item, id) => (
               <p key={id} className="flex items-center gap-2">
                  <span>
                     <BiPlusMedical className="text-secondary" />
                  </span>
                  <span>{item}</span>
               </p>
            ))}
         </div>
      </div>
   );
};

export default Specializations;
