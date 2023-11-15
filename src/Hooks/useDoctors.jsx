import { useQuery } from "@tanstack/react-query";
import { getAllDoctors } from "../Api/ApiRequest";

const useDoctors = () => {
   const { isPending, data } = useQuery({
      queryKey: ["doctors"],
      queryFn: getAllDoctors,
   });

   // Reverse doctor array
   const doctors = data ? data.reverse() : [];

   // 8 Doctors to show home page
   const homeDoctors = !isPending ? doctors.slice(0, 8) : [];

   return { isPending, doctors, homeDoctors };
};

export default useDoctors;
