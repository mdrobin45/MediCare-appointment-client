const TableHeader = ({ colsName }) => {
   return (
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
            {colsName.map((name, index) => (
               <th key={index} scope="col" className="px-6 py-3">
                  {name}
               </th>
            ))}
         </tr>
      </thead>
   );
};

export default TableHeader;
