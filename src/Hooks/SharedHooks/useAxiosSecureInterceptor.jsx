import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const useAxiosSecureInterceptor = () => {
   const navigate = useNavigate();
   const { logOut } = useContext(AuthContext);
   // Create axios instance
   const secureAxiosRequest = axios.create({
      baseURL: import.meta.env.VITE_SERVER_API,
      withCredentials: true,
   });

   // Request interceptor
   secureAxiosRequest.interceptors.request.use((config) => {
      return config;
   });

   // Response interceptor
   secureAxiosRequest.interceptors.response.use(
      (response) => {
         return response;
      },
      async (err) => {
         if (err.response.status === 401 || err.response.status === 403) {
            await logOut().then(() => {
               toast.error("Unauthorized access");
               navigate("/login");
            });
         }
         return Promise.reject(err);
      }
   );

   return secureAxiosRequest;
};

export default useAxiosSecureInterceptor;
