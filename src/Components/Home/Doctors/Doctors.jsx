import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllDoctors } from "../../../APIfetch/ApiFetch";
import SectionHeader from "../../SectionHeader/SectionHeader";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
   const [doctors, setDoctors] = useState([]);

   // Fetch with tan stack query
   const { isPending, data } = useQuery({
      queryKey: ["doctors"],
      queryFn: getAllDoctors,
   });

   // Slice 8 doctors
   useEffect(() => {
      if (!isPending) {
         const slicedData = data.slice(-8);
         const reversed = slicedData.reverse();
         setDoctors(reversed);
      }
   }, [data, isPending]);

   return (
      <div className="px-2 sm:px-6 lg:px-8 py-16">
         <SectionHeader title="Meet Our Expert Doctor" subtitle="Our Doctors" />
         {!isPending ? (
            <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
                  {doctors.map((item) => (
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
