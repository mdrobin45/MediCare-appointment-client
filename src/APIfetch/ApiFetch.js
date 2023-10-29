import axios from "axios";

// Fetch all doctors
export const getAllDoctors = async () => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/doctors`
   );
   return response;
};

// Fetch one doctor
export const getSingleDoctor = async (id) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/doctors/${id}`
   );
   return response;
};
