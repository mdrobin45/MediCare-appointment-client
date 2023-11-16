import { useQuery } from "@tanstack/react-query";
import { getUserAppointments } from "../Api/ApiRequest";
import useAuth from "./useAuth";

const usePatientAppointments = () => {
   const { user } = useAuth();

   // Request server for user appointment
   const { data: userAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => getUserAppointments(user?.email),
   });

   return userAppointments;
};

export default usePatientAppointments;
