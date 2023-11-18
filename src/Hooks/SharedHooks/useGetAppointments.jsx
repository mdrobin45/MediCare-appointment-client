import { useQuery } from "@tanstack/react-query";
import { getUserAppointments } from "../../Api/ApiRequest";
import useAuth from "./useAuth";

const useGetAppointments = () => {
   const { user } = useAuth();

   // Request server for user appointment
   let { data: userAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => getUserAppointments(user?.email),
   });
   userAppointments = userAppointments.toReversed();

   return userAppointments;
};

export default useGetAppointments;
