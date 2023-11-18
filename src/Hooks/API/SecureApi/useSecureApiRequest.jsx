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

   // Fetch appointments by user
   const getUserAppointments = async (email) => {
      const { data: response } = await secureAxiosRequest.get(
         `/appointment/all?userEmail=${email}`
      );
      return response;
   };

   return { getSingleDoctor, postAppointment, getUserAppointments };
};

export default useSecureApiRequest;
