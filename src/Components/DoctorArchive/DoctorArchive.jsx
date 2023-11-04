import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { loadCurrentPageDoctor } from "../../Api/Api";
import DoctorCard from "../DoctorCard/DoctorCard";
import Pagination from "../Pagination/Pagination";

const DoctorArchive = () => {
   const [pageNumber, setPageNumber] = useState(1);
   const pageSize = 8;

   // Load data with query stack
   const {
      isPending,
      data: { result, dataCount },
   } = useQuery({
      queryKey: ["doctors", pageNumber],
      queryFn: () => loadCurrentPageDoctor(pageNumber, pageSize),
      initialData: { result: [], dataCount: 0 },
   });

   const totalPage = Math.ceil(dataCount / pageSize);

   return (
      <>
         {!isPending ? (
            <>
               <div className="grid mt-20 px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6">
                  {result.map((item) => (
                     <DoctorCard key={item._id} doctor={item} />
                  ))}
               </div>
               <Pagination
                  setPageNumber={setPageNumber}
                  totalPage={totalPage}
               />
            </>
         ) : (
            <span>Loading</span>
         )}
      </>
   );
};

export default DoctorArchive;
