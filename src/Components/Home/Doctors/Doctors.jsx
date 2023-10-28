import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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
         const slicedData = data.slice(0, 8);
         setDoctors(slicedData);
      }
   }, [data, isPending]);
   return (
      <div className="px-2 sm:px-6 lg:px-8">
         <SectionHeader title="Meet Our Expert Doctor" subtitle="Our Doctors" />
         {!isPending ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
               {doctors.map((item) => (
                  <DoctorCard key={item._id} doctor={item} />
               ))}
            </div>
         ) : (
            <span>Loading</span>
         )}
      </div>
   );
};

export default Doctors;
