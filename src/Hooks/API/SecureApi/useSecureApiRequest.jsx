import useAxiosSecureInterceptor from "../../SharedHooks/useAxiosSecureInterceptor";

const useSecureApiRequest = () => {
   const secureAxiosRequest = useAxiosSecureInterceptor();

   // Fetch one doctor
   const getSingleDoctor = async (id) => {
      const { data: response } = await secureAxiosRequest.get(`/doctor/${id}`);
      return response;
   };

   // Post appointment
   const postAppointment = async (data) => {
      const { data: response } = await secureAxiosRequest.post(
         `/appointment`,
         data
      );
      return response;
   };

   // Fetch patient appointments
   const fetchPatientAppointments = async (email) => {
      const { data: response } = await secureAxiosRequest.get(
         `/appointment/patient?userEmail=${email}`
      );
      return response;
   };

   // Fetch patient appointments
   const fetchDoctorsAppointments = async (email) => {
      const { data: response } = await secureAxiosRequest.get(
         `/appointment/doctor?userEmail=${email}`
      );
      return response;
   };

   return {
      getSingleDoctor,
      postAppointment,
      fetchDoctorsAppointments,
      fetchPatientAppointments,
   };
};

export default useSecureApiRequest;
