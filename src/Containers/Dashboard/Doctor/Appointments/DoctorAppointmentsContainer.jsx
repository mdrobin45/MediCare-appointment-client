import useDoctorAppointments from "../../../../Hooks/SharedHooks/useDoctorAppointments";
import Table from "./Table/Table";

// Table cols
const tableCols = [
   "Patient Name",
   "Email",
   "Age",
   "Gender",
   "Appt Date",
   "Time",
   "Fees",
   "Status",
   "Action",
];
const DoctorAppointmentsContainer = () => {
   const { doctorAppointments } = useDoctorAppointments();
   return (
      <>
         <Table tableCols={tableCols} appointments={doctorAppointments} />
      </>
   );
};

export default DoctorAppointmentsContainer;
