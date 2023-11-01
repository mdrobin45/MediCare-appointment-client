import axios from "axios";

const useAxios = () => {
   const axiosSecure = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true,
   });
   return axiosSecure;
};

export default useAxios;
