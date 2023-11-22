import Table from "../../../../Components/Dashboard/AppointmentTable/Table";
import useDoctorAppointments from "../../../../Hooks/SharedHooks/useDoctorAppointments";

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
   const doctorAppointments = useDoctorAppointments();
   return (
      <div>
         <div className="relative overflow-x-auto border">
            <Table appointments={doctorAppointments} tableCols={tableCols} />
         </div>
      </div>
   );
};

export default DoctorAppointmentsContainer;
