import { useLocation } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
   const location = useLocation();
   const { user } = useAuth();
   console.log(user);
   console.log(location);
   return (
      <div>
         <PageHeader title="Book Appointment" />
      </div>
   );
};

export default Booking;
