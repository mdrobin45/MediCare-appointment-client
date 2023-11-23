import axios from "axios";
import useAuth from "./useAuth";

const useAxiosSecureInterceptor = () => {
   const { user } = useAuth();

   // Create axios instance
   const secureAxiosRequest = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true,
      params: {
         userEmail: user?.email,
      },
   });

   // Request interceptor
   secureAxiosRequest.interceptors.request.use((config) => {
      return config;
   });

   // Response interceptor
   secureAxiosRequest.interceptors.response.use((response) => {
      return response;
   });

   return secureAxiosRequest;
};

export default useAxiosSecureInterceptor;
