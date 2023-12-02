import AppointmentForm from "./AppointmentForm/AppointmentForm";
import useBookingLogic from "./ServiceLogic/useBookingLogic";
import Summary from "./Summary/Summary";

const BookingContainer = () => {
   const {
      appointmentData,
      setAppointmentData,
      handleChange,
      handleSubmit,
      isPending,
      totalPrice,
   } = useBookingLogic();

   return (
      <div className="px-2 mt-10 sm:px-6 lg:px-8 flex justify-between gap-10">
         <AppointmentForm
            appointmentData={appointmentData}
            setAppointmentData={setAppointmentData}
            changeHandler={handleChange}
         />
         <Summary
            isLoading={isPending}
            handleSubmit={handleSubmit}
            total={totalPrice}
         />
      </div>
   );
};

export default BookingContainer;
