import axios from "axios";

const useAxios = () => {
   const axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true,
   });
   return axiosInstance;
};

export default useAxios;
