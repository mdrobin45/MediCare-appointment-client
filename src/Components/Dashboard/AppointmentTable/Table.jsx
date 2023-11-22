import TableData from "./TableData";
import TableHeader from "./TableHeader";

const Table = ({ appointments, tableCols }) => {
   return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         <TableHeader colsName={tableCols} />
         <tbody className="overflow-scroll ">
            {appointments.map((appointment) => (
               <TableData key={appointment._id} appointment={appointment} />
            ))}
         </tbody>
      </table>
   );
};

export default Table;
