import useAxiosPublicInterceptor from "../../SharedHooks/useAxiosPublicInterceptor";

const usePublicApiRequest = () => {
   const publicAxiosRequest = useAxiosPublicInterceptor();

   // Fetch all doctors
   const getAllDoctors = async () => {
      const { data: response } = await publicAxiosRequest.get(`/doctor`);
      return response;
   };

   // Fetch doctors by page number
   const loadCurrentPageDoctor = async (pageNumber, pageSize) => {
      const { data: response } = await publicAxiosRequest.get(
         `/doctor/paginated?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      return response;
   };

   // Generate token
   const generateToken = async (data) => {
      const { data: response } = await publicAxiosRequest.post(`/token`, data);
      return response;
   };

   // Logout user and clear token
   const clearToken = async () => {
      const { data: response } = await publicAxiosRequest.post(`/logout`);
      return response;
   };

   // Save user data to database after successful authentication
   const saveUserData = async (userData) => {
      const { data } = await publicAxiosRequest.post("/users", userData);
      return data;
   };

   return {
      getAllDoctors,
      saveUserData,
      loadCurrentPageDoctor,
      generateToken,
      clearToken,
   };
};

export default usePublicApiRequest;
