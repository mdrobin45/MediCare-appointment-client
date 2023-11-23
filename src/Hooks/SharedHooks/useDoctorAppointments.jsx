import { useQuery } from "@tanstack/react-query";
import useSecureApiRequest from "../API/SecureApi/useSecureApiRequest";
import useAuth from "./useAuth";

const useDoctorAppointments = () => {
   const { user } = useAuth();
   const { fetchDoctorsAppointments } = useSecureApiRequest();

   // Request server for user appointment
   let { refetch, data: doctorAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => fetchDoctorsAppointments(),
   });
   doctorAppointments = doctorAppointments.toReversed();

   return { doctorAppointments, refetch };
};

export default useDoctorAppointments;
