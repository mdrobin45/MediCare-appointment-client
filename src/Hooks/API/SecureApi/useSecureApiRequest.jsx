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
   const fetchPatientAppointments = async () => {
      const { data: response } = await secureAxiosRequest.get(
         `/appointment/patient`
      );
      return response;
   };

   // Fetch doctor appointments
   const fetchDoctorsAppointments = async () => {
      const { data: response } = await secureAxiosRequest.get(
         `/appointment/doctor`
      );
      return response;
   };

   // appointment status update request
   const updateAptStatus = async (id, status) => {
      const { data } = await secureAxiosRequest.put(
         `/appointment/update/${id}`,
         status
      );
      return data;
   };

   return {
      getSingleDoctor,
      updateAptStatus,
      postAppointment,
      fetchDoctorsAppointments,
      fetchPatientAppointments,
   };
};

export default useSecureApiRequest;
