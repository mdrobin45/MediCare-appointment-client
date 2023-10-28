import axios from "axios";

// Fetch all doctors
export const getAllDoctors = async () => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/doctors`
   );
   return response;
};
