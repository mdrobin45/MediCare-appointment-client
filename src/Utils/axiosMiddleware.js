import axios from "axios";

export const axiosMiddleware = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
   withCredentials: true,
});
