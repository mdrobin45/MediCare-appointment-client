import Table from "../../../../Components/Dashboard/AppointmentTable/Table";
import usePatientAppointments from "../../../../Hooks/SharedHooks/usePatientAppointments";

// Table cols
const tableCols = [
   "Doctor Name",
   "Appt Date",
   "Booking Date",
   "Amount",
   "Status",
   "Action",
];
const PatientAppointmentsContainer = () => {
   const patientAppointments = usePatientAppointments();
   return (
      <div className="relative overflow-x-auto border">
         <Table appointments={patientAppointments} tableCols={tableCols} />
      </div>
   );
};

export default PatientAppointmentsContainer;
