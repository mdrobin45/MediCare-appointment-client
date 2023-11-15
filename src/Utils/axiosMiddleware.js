import axios from "axios";

export const axiosMiddleware = axios.create({
   baseURL: "http://localhost:3000",
   withCredentials: true,
});
