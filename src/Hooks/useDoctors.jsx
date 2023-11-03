import { useQuery } from "@tanstack/react-query";
import { getAllDoctors } from "../Api/Api";

const useDoctors = () => {
   // Fetch with tan stack query
   const { isPending, data: doctors } = useQuery({
      queryKey: ["doctors"],
      queryFn: getAllDoctors,
   });
   return { isPending, doctors };
};

export default useDoctors;
