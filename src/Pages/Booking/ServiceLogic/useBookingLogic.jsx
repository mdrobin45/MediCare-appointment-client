import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSecureApiRequest from "../../../Hooks/API/SecureApi/useSecureApiRequest";
import useAuth from "../../../Hooks/SharedHooks/useAuth";

// Initial form values
const initialFormValues = {
   name: "",
   email: "",
   phone: "",
   address: "",
   city: "",
   gender: "male",
   age: "",
   note: "",
   status: "pending",
};
const useBookingLogic = () => {
   const { user } = useAuth();
   const { state } = useLocation();
   const { meetDate, meetTime, doctorEmail, doctorId, selectedService } = state;
   const { postAppointment } = useSecureApiRequest();

   // Calculate services price
   const totalPrice = selectedService.reduce((accumulator, object) => {
      return accumulator + parseFloat(object.price);
   }, 0);

   // Appointment data
   const [appointmentData, setAppointmentData] = useState({
      ...initialFormValues,
      meetTime,
      meetDate,
      doctor: doctorId,
      doctorEmail: doctorEmail,
      price: totalPrice,
   });

   // Auto fill user info from profile
   useEffect(() => {
      if (user) {
         setAppointmentData((prevData) => ({
            ...prevData,
            name: user.displayName,
            email: user.email,
         }));
      }
   }, [user]);

   // Handle form change
   const handleChange = (e) => {
      const { name, value } = e.target;
      setAppointmentData((prevData) => ({ ...prevData, [name]: value }));
   };

   // post appointment with query stack
   const { mutate, isPending } = useMutation({
      mutationFn: () => postAppointment(appointmentData),
      onSuccess: async (data) => {
         if (data.id) {
            alert("Payment successful");
         }
      },
   });

   // handle form submit
   const handleSubmit = () => {
      mutate();
   };
   return {
      appointmentData,
      setAppointmentData,
      handleChange,
      handleSubmit,
      isPending,
      totalPrice,
   };
};

export default useBookingLogic;
