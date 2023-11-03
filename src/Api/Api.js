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

// Fetch doctors by page number
export const loadCurrentPageDoctor = async (pageNumber, pageSize) => {
   const { data: response } = await axios.get(
      `${
         import.meta.env.VITE_SERVER_API
      }/doctor/paginated?pageNumber=${pageNumber}&pageSize=${pageSize}`
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
      `${import.meta.env.VITE_SERVER_API}/appointment/all?userEmail=${email}`,
      { withCredentials: true }
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

// Logout user and clear token
export const clearToken = async () => {
   const { data: response } = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/logout`,
      { withCredentials: true }
   );
   return response;
};
