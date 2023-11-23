import { Link } from "react-router-dom";
import useUserRole from "../../../Hooks/SharedHooks/useUserRole";

const TableData = ({ appointment }) => {
   const { userRole } = useUserRole();
   const { doctor, name, meetDate, bookingDate, price, status } = appointment;
   return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
         <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {userRole === "doctor" ? name : doctor?.name}
         </th>
         <td className="px-6 py-4">{meetDate}</td>
         <td className="px-6 py-4">{bookingDate}</td>
         <td className="px-6 py-4">${price}</td>
         <td className="px-6 py-4">
            <span
               className={`${
                  status === "pending"
                     ? "bg-[#fff6e5] text-[#ffab01]"
                     : status === "approved"
                     ? "bg-blue-100 text-blue-800"
                     : status === "complete"
                     ? "bg-green-100 text-green-800"
                     : status === "cancelled"
                     ? "bg-[#f5e7e5] text-[#fe5948]"
                     : ""
               } capitalize block text-center rounded-full text-sm font-medium me-2 px-2.5 py-0.5`}>
               {status}
            </span>
         </td>
         <td className="px-6 py-4">
            <Link
               to="/client"
               className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
               View
            </Link>
         </td>
      </tr>
   );
};

export default TableData;
