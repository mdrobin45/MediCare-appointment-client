import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllDoctors } from "../Api/Api";

const useDoctors = () => {
   const [doctors, setDoctors] = useState([]);
   // Fetch with tan stack query
   const { isPending, data } = useQuery({
      queryKey: ["doctors"],
      queryFn: getAllDoctors,
   });

   useEffect(() => {
      if (!isPending) {
         const reverseArray = data.reverse();
         setDoctors(reverseArray);
      }
   }, [data, isPending]);
   return { isPending, doctors };
};

export default useDoctors;
