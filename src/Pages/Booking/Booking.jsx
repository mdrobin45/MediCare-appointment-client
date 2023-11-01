import BookingLayout from "../../Components/Booking/BookingLayout";
import PageHeader from "../../Components/PageHeader/PageHeader";

const Booking = () => {
   return (
      <div>
         <PageHeader title="Book Appointment" />
         <BookingLayout />
      </div>
   );
};

export default Booking;
