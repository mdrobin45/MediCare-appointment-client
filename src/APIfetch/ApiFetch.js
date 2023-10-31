import axios from "axios";

// Fetch all doctors
export const getAllDoctors = async () => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/doctor`
   );
   return response;
};

// Fetch one doctor
export const getSingleDoctor = async (id) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/doctor/${id}`
   );
   return response;
};
