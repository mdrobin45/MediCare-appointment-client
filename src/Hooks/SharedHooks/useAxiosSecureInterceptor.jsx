import axios from "axios";

const useAxiosSecureInterceptor = () => {
   // Create axios instance
   const secureAxiosRequest = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true,
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
