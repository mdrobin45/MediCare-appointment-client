import axios from "axios";

// Create axios instance
const publicAxiosRequest = axios.create({
   baseURL: "http://localhost:3000",
});

const useAxiosPublicInterceptor = () => {
   return publicAxiosRequest;
};

export default useAxiosPublicInterceptor;
