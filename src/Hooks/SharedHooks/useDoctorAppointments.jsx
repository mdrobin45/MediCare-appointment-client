import { useQuery } from "@tanstack/react-query";
import useSecureApiRequest from "../API/SecureApi/useSecureApiRequest";
import useAuth from "./useAuth";

const useDoctorAppointments = () => {
   const { user } = useAuth();
   const { fetchDoctorsAppointments } = useSecureApiRequest();

   // Request server for user appointment
   let { data: doctorAppointments = [] } = useQuery({
      queryKey: ["userAppointment", user],
      queryFn: () => fetchDoctorsAppointments(user?.email),
   });
   doctorAppointments = doctorAppointments.toReversed();

   return doctorAppointments;
};

export default useDoctorAppointments;
