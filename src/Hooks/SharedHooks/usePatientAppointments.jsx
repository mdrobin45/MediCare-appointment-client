import { useQuery } from "@tanstack/react-query";
import useSecureApiRequest from "../API/SecureApi/useSecureApiRequest";
import useAuth from "./useAuth";

const usePatientAppointments = () => {
   const { user } = useAuth();
   const { fetchPatientAppointments } = useSecureApiRequest();

   // Request server for user appointment
   let { data: patientAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => fetchPatientAppointments(user?.email),
   });
   patientAppointments = patientAppointments.toReversed();

   return patientAppointments;
};

export default usePatientAppointments;
