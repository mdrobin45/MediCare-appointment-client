import { useQuery } from "@tanstack/react-query";
import useSecureApiRequest from "../API/SecureApi/useSecureApiRequest";
import useAuth from "./useAuth";

const useGetAppointments = () => {
   const { user } = useAuth();
   const { getUserAppointments } = useSecureApiRequest();

   // Request server for user appointment
   let { data: userAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => getUserAppointments(user?.email),
   });
   userAppointments = userAppointments.toReversed();

   return userAppointments;
};

export default useGetAppointments;
