import AppointmentForm from "./AppointmentForm/AppointmentForm";
import Summary from "./Summary/Summary";

const BookingLayout = () => {
   return (
      <div className="px-2 mt-10 sm:px-6 lg:px-8 flex justify-between gap-10">
         <AppointmentForm />
         <Summary />
      </div>
   );
};

export default BookingLayout;
