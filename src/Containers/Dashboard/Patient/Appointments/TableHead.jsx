const TableHead = () => {
   return (
      <tr>
         <th scope="col" className="px-6 py-3">
            Doctor Name
         </th>
         <th scope="col" className="px-6 py-3">
            Appt Date
         </th>
         <th scope="col" className="px-6 py-3">
            Booking Date
         </th>
         <th scope="col" className="px-6 py-3">
            Amount
         </th>
         <th scope="col" className="px-6 py-3">
            Status
         </th>
         <th scope="col" className="px-6 py-3">
            Action
         </th>
      </tr>
   );
};

export default TableHead;
