import { axiosMiddleware } from "../Utils/axiosMiddleware";

// Fetch all doctors
export const getAllDoctors = async () => {
   const { data: response } = await axiosMiddleware.get(`/doctor`);
   return response;
};

// Fetch one doctor
export const getSingleDoctor = async (id) => {
   const { data: response } = await axiosMiddleware.get(`/doctor/${id}`);
   return response;
};

// Fetch doctors by page number
export const loadCurrentPageDoctor = async (pageNumber, pageSize) => {
   const { data: response } = await axiosMiddleware.get(
      `/doctor/paginated?pageNumber=${pageNumber}&pageSize=${pageSize}`
   );
   return response;
};

// Post appointment
export const postAppointment = async (data) => {
   const { data: response } = await axiosMiddleware.post(`/appointment`, data);
   return response;
};

// Fetch appointments by user
export const getUserAppointments = async (email) => {
   const { data: response } = await axiosMiddleware.get(
      `/appointment/all?userEmail=${email}`
   );
   return response;
};

// Generate token
export const generateToken = async (data) => {
   const { data: response } = await axiosMiddleware.post(`/token`, data);
   return response;
};

// Logout user and clear token
export const clearToken = async () => {
   const { data: response } = await axiosMiddleware.post(`/logout`);
   return response;
};
