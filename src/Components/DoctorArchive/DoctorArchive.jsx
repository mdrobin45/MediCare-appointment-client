import useDoctors from "../../Hooks/useDoctors";
import DoctorCard from "../Home/Doctors/DoctorCard";

const DoctorArchive = () => {
   const { isPending, doctors } = useDoctors();
   return (
      <>
         {!isPending ? (
            <div className="grid mt-20 px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
               {doctors.map((item) => (
                  <DoctorCard key={item._id} doctor={item} />
               ))}
            </div>
         ) : (
            <span>Loading</span>
         )}
      </>
   );
};

export default DoctorArchive;
