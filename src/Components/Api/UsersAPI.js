import axios from "axios";

// Register
export const registerUser = async (userData) => {
   const { data: response } = await axios.post(
      "http://localhost:3000/register",
      userData
   );
   return response;
};

// Login
export const loginUser = async (userData) => {
   const { data: response } = await axios.post(
      "http://localhost:3000/login",
      userData,
      { withCredentials: true }
   );
   return response;
};
