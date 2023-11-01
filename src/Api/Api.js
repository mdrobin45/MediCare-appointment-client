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

// Post appointment
export const postAppointment = async (data) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/appointment`,
      data
   );
   return response;
};

// Fetch appointments by user
export const getUserAppointments = async (email) => {
   const { data: response } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/appointment/all?email=${email}`
   );
   return response;
};

// Generate token
export const generateToken = async (data) => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/token`,
      data,
      { withCredentials: true }
   );
   return response;
};
