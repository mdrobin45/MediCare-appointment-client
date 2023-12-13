import axios from "axios";

// Create axios instance
const publicAxiosRequest = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
   withCredentials: true,
});

const useAxiosPublicInterceptor = () => {
   return publicAxiosRequest;
};

export default useAxiosPublicInterceptor;
