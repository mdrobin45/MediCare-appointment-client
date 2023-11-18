import Table from "../../../../Components/Dashboard/AppointmentTable/Table";
import useGetAppointments from "../../../../Hooks/SharedHooks/useGetAppointments";

// Table cols
const tableCols = [
   "Doctor Name",
   "Appt Date",
   "Booking Date",
   "Amount",
   "Status",
   "Action",
];
const AppointmentsContainer = () => {
   const userAppointments = useGetAppointments();
   return (
      <div className="relative overflow-x-auto border">
         <Table appointments={userAppointments} tableCols={tableCols} />
      </div>
   );
};

export default AppointmentsContainer;
