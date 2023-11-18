import { useQuery } from "@tanstack/react-query";
import usePublicApiRequest from "../API/PublicApi/usePublicApiRequest";

const useGetDoctors = () => {
   const { getAllDoctors } = usePublicApiRequest();

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

export default useGetDoctors;
