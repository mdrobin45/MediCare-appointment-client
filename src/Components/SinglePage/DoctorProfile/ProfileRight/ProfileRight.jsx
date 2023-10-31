import { format } from "date-fns";
import moment from "moment/moment";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./style.css";

const ProfileRight = () => {
   const [selected, setSelected] = useState();
   if (selected) {
      console.log(format(selected, "PP"));
   }

   // Calculate next month
   const nextMonth = {
      year: moment().add(1, "months").format("YYYY"),
      month: moment().add(1, "months").format("MM"),
      day: moment().add(1, "months").format("DD"),
   };
   console.log(nextMonth);
   return (
      <div className="border rounded-b-md sticky top-6">
         <div className="bg-primary text-white p-6 rounded-t-md">
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <p className="text-gray-300">Monday to Friday: 09:00Am-05:00PM</p>
         </div>
         <div className="p-6">
            <DayPicker
               mode="single"
               selected={selected}
               onSelect={setSelected}
               fromMonth={new Date()}
               toDate={new Date(nextMonth.year, nextMonth.month, nextMonth.day)}
               modifiersClassNames={{ selected: "mySelected" }}
            />
            <div className="my-6">
               <ul className="grid grid-cols-3 gap-y-3 w-full">
                  <li>
                     <input
                        type="radio"
                        id="hosting-small"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        required
                     />
                     <label
                        htmlFor="hosting-small"
                        className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        09:00 AM
                     </label>
                  </li>
                  <li>
                     <input
                        type="radio"
                        id="hosting-small1"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        required
                     />
                     <label
                        htmlFor="hosting-small1"
                        className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        10:00 AM
                     </label>
                  </li>
                  <li>
                     <input
                        type="radio"
                        id="hosting-small1"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        required
                     />
                     <label
                        htmlFor="hosting-small1"
                        className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        12:00 AM
                     </label>
                  </li>
                  <li>
                     <input
                        type="radio"
                        id="hosting-small1"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        required
                     />
                     <label
                        htmlFor="hosting-small1"
                        className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        04:00 PM
                     </label>
                  </li>
               </ul>
            </div>
            <hr />
            <h3 className="text-xl font-bold mt-4">Choose Service</h3>

            <div className="flex items-center my-3 pl-4 border border-gray-200 rounded dark:border-gray-700">
               <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value="40"
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               />
               <label
                  htmlFor="bordered-checkbox-1"
                  className="w-full flex items-center justify-between py-4 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span>Default radio</span>
                  <span>$40</span>
               </label>
            </div>
            <div className="flex items-center my-3 pl-4 border border-gray-200 rounded dark:border-gray-700">
               <input
                  id="bordered-checkbox-2"
                  type="checkbox"
                  value="40"
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               />
               <label
                  htmlFor="bordered-checkbox-2"
                  className="w-full flex items-center justify-between py-4 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span>Default radio</span>
                  <span>$40</span>
               </label>
            </div>
            <button className="w-full mt-6 block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
               Book Appointment
            </button>
         </div>
      </div>
   );
};

export default ProfileRight;
