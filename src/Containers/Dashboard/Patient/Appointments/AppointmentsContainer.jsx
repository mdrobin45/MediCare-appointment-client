import usePatientAppointments from "../../../../Hooks/usePatientAppointments";
import TableData from "./TableData";
import TableHead from "./TableHead";

const AppointmentsContainer = () => {
   let userAppointments = usePatientAppointments();
   return (
      <div className="relative overflow-x-auto border">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <TableHead />
            </thead>
            <tbody>
               {userAppointments.map((appointment) => (
                  <TableData key={appointment._id} appointment={appointment} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default AppointmentsContainer;
