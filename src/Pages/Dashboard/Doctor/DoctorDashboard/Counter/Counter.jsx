import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { MdFreeCancellation } from "react-icons/md";
import FeaturedCard from "../../../../../Components/Dashboard/FeaturedCard/FeaturedCard";
import useDoctorAppointments from "../../../../../Hooks/SharedHooks/useDoctorAppointments";

const Counter = ({ props }) => {
   const { doctorAppointments } = useDoctorAppointments();
   const totalCount = doctorAppointments.length;
   const pendingCount = doctorAppointments.filter(
      (appnt) => appnt.status === "pending"
   ).length;
   const completeCount = doctorAppointments.filter(
      (appnt) => appnt.status === "complete"
   ).length;
   const cancelCount = doctorAppointments.filter(
      (appnt) => appnt.status === "cancelled"
   ).length;
   return (
      <div className="grid grid-cols-4 gap-6 mt-6">
         <FeaturedCard
            icon={<IoCalendarNumberOutline />}
            counter={totalCount ? totalCount : 0}
            name="Total Appointments"
         />
         <FeaturedCard
            icon={<LuCalendarClock />}
            counter={pendingCount ? pendingCount : 0}
            name="Pending Appointments"
         />
         <FeaturedCard
            icon={<FaRegCalendarCheck />}
            counter={completeCount ? completeCount : 0}
            name="Complete Appointments"
         />
         <FeaturedCard
            icon={<MdFreeCancellation />}
            counter={cancelCount ? cancelCount : 0}
            name="Cancelled Appointments"
         />
      </div>
   );
};

export default Counter;
