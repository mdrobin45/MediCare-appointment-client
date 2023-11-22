import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import FeaturedCard from "../../../../../Components/Dashboard/FeaturedCard/FeaturedCard";
import usePatientAppointments from "../../../../../Hooks/SharedHooks/usePatientAppointments";

const FeaturedContent = () => {
   const userAppointments = usePatientAppointments();

   // All appointment count
   const totalAppointment = userAppointments.length;

   // Pending appointment
   const pendingAppointmentCount = userAppointments.filter(
      (item) => item.status === "pending"
   ).length;

   // Complete appointment
   const completeAppointmentCount = userAppointments.filter(
      (item) => item.status === "complete"
   ).length;
   return (
      <div className="grid grid-cols-3 gap-6">
         <FeaturedCard
            icon={<IoCalendarNumberOutline />}
            counter={totalAppointment ? totalAppointment : 0}
            name="Total Appointments"
         />
         <FeaturedCard
            icon={<LuCalendarClock />}
            counter={pendingAppointmentCount ? pendingAppointmentCount : 0}
            name="Pending Appointments"
         />
         <FeaturedCard
            icon={<FaRegCalendarCheck />}
            counter={completeAppointmentCount ? completeAppointmentCount : 0}
            name="Complete Appointments"
         />
      </div>
   );
};

export default FeaturedContent;
