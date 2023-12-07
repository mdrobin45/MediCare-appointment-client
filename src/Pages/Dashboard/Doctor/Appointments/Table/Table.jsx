import useSecureApiRequest from "../../../../../Hooks/API/SecureApi/useSecureApiRequest";
import useDoctorAppointments from "../../../../../Hooks/SharedHooks/useDoctorAppointments";
const Table = ({ tableCols, appointments }) => {
   const { updateAptStatus } = useSecureApiRequest();
   const { refetch } = useDoctorAppointments();

   // approve appointment handler
   const handleStatusUpdate = (id, status) => {
      updateAptStatus(id, { status: status }).then((res) => {
         if (res.id) {
            refetch();
            alert("Status updated");
         }
      });
   };
   return (
      <div className="w-[60rem] overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  {tableCols.map((ColName, index) => (
                     <th key={index} scope="col" className="px-6 py-3">
                        {ColName}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {appointments.map((item, index) => (
                  <tr
                     key={index}
                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.name}
                     </th>

                     <td className="px-6 py-4">{item?.email}</td>
                     <td className="px-6 py-4">{item?.age}</td>
                     <td className="px-6 py-4 capitalize">{item?.gender}</td>
                     <td className="px-6 py-4">{item?.meetDate}</td>
                     <td className="px-6 py-4">{item?.meetTime}</td>
                     <td className="px-6 py-4">{item?.price}</td>
                     <td className="px-6 py-4">
                        <span
                           className={`${
                              item?.status === "pending"
                                 ? "bg-[#fff6e5] text-[#ffab01]"
                                 : item?.status === "approved"
                                 ? "bg-blue-100 text-blue-800"
                                 : item?.status === "complete"
                                 ? "bg-green-100 text-green-800"
                                 : item?.status === "cancelled"
                                 ? "bg-[#f5e7e5] text-[#fe5948]"
                                 : ""
                           } capitalize block text-center rounded-full text-sm font-medium me-2 px-2.5 py-0.5`}>
                           {item?.status}
                        </span>
                     </td>
                     <td className="px-6 py-4">
                        {item?.status === "approved" ? (
                           <button
                              onClick={() => {
                                 handleStatusUpdate(item?._id, "complete");
                              }}
                              className="bg-cyan-500">
                              Complete
                           </button>
                        ) : item?.status === "complete" ||
                          item?.status === "cancelled" ? (
                           ""
                        ) : (
                           <div className="flex gap-3">
                              <button
                                 onClick={() => {
                                    handleStatusUpdate(item?._id, "approved");
                                 }}
                                 className="bg-primary">
                                 Approve
                              </button>
                              <button
                                 onClick={() => {
                                    handleStatusUpdate(item?._id, "cancelled");
                                 }}
                                 className="bg-red-500">
                                 Cancel
                              </button>
                           </div>
                        )}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
