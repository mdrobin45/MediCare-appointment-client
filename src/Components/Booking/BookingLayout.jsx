import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { postAppointment } from "../../APIfetch/ApiFetch";
import useAuth from "../../Hooks/useAuth";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import Summary from "./Summary/Summary";

const BookingLayout = () => {
   const { user } = useAuth();
   const { state } = useLocation();
   const { meetDate, meetTime, doctorId, selectedService } = state;

   // Calculate services price
   const total = selectedService.reduce((accumulator, object) => {
      return accumulator + parseFloat(object.price);
   }, 0);

   // Appointment data
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      gender: "male",
      age: "",
      note: "",
      meetTime,
      meetDate,
      doctor: doctorId,
      price: total,
      adminStatus: "active",
      status: "pending",
   });

   // Auto fill user info from profile
   useEffect(() => {
      if (user) {
         setFormData((prevData) => ({
            ...prevData,
            name: user.displayName,
            email: user.email,
         }));
      }
   }, [user]);

   // Handle form change
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // post appointment with query stack
   const { mutate, isPending } = useMutation({
      mutationFn: () => postAppointment(formData),
      onSuccess: async (data) => {
         console.log(data);
      },
   });

   // handle form submit
   const handleSubmit = () => {
      mutate();
   };

   return (
      <div className="px-2 mt-10 sm:px-6 lg:px-8 flex justify-between gap-10">
         <AppointmentForm
            formData={formData}
            setFormData={setFormData}
            changeHandler={handleChange}
         />
         <Summary
            isLoading={isPending}
            handleSubmit={handleSubmit}
            total={total}
         />
      </div>
   );
};

export default BookingLayout;
