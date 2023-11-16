import Table from "../../../../Components/Dashboard/AppointmentTable/Table";
import usePatientAppointments from "../../../../Hooks/usePatientAppointments";

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
   const userAppointments = usePatientAppointments();
   return (
      <div className="relative overflow-x-auto border">
         <Table appointments={userAppointments} tableCols={tableCols} />
      </div>
   );
};

export default AppointmentsContainer;
