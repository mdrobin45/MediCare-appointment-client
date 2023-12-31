import { Link } from "react-router-dom";
import DoctorCard from "../../../Components/DoctorCard/DoctorCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useGetDoctors from "../../../Hooks/SharedHooks/useGetDoctors";

const Doctors = () => {
   const { isPending, homeDoctors } = useGetDoctors();

   return (
      <div className="px-2 sm:px-6 lg:px-8 py-16">
         <SectionHeader title="Meet Our Expert Doctor" subtitle="Our Doctors" />
         {!isPending ? (
            <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
                  {homeDoctors.map((item) => (
                     <DoctorCard key={item._id} doctor={item} />
                  ))}
               </div>
               <div className="text-center pt-10">
                  <Link
                     to="/"
                     className="text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-2 px-7">
                     See All
                  </Link>
               </div>
            </>
         ) : (
            <span>Loading</span>
         )}
      </div>
   );
};

export default Doctors;
