import { isBefore } from "date-fns";
import moment from "moment/moment";
import { useEffect, useState } from "react";
// import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "rsuite";
import "./style.css";

const ProfileRight = ({ doctor }) => {
   const [selectedService, setSelectedService] = useState([]);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [formData, setFormData] = useState({});
   const [time, setTime] = useState("");
   const navigate = useNavigate();

   const pastDate = moment().format("YYYY-MM-DD");
   const meetDate = moment(selectedDate).format("DD MMM YYYY");
   const selectedDay = moment(selectedDate).format("dddd");
   const { _id, name, services, availability } = doctor;

   // Handle change and get input user value
   const handleServiceChange = (e) => {
      const { value, checked } = e.target;

      const checkedService = services.find((item) => item.name === value);

      if (checked) {
         setSelectedService((prevData) => [...prevData, checkedService]);
      } else {
         setSelectedService(
            selectedService.filter((item) => item.name !== value)
         );
      }
   };

   // Handle time change
   const handleTimeChange = (e) => {
      const { value } = e.target;
      setTime(value);
   };

   // Update final form data
   useEffect(() => {
      setFormData((prevData) => ({
         ...prevData,
         meetTime: time,
         meetDate,
         doctorId: _id,
         doctorName: name,
         selectedService,
      }));
   }, [meetDate, selectedService, time, name, _id]);

   // handle submit
   const handleSubmit = () => {
      // Navigate to appointment page
      navigate("/booking", { state: formData });
   };

   return (
      <div className="border rounded-b-md sticky top-6">
         <div className="bg-primary text-white p-6 rounded-t-md">
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <p className="text-gray-300">Monday to Friday: 09:00Am-05:00PM</p>
         </div>
         <div className="p-6">
            <DatePicker
               value={selectedDate}
               onChange={setSelectedDate}
               shouldDisableDate={(date) => isBefore(date, new Date(pastDate))}
               placeholder="Select Date"
               format="dd-MM-yyyy"
               oneTap
               style={{ width: "100%" }}
            />
            <div className="my-6">
               <ul className="grid grid-cols-3 gap-y-3 w-full">
                  {availability.map(
                     (item) =>
                        item.day === selectedDay &&
                        item.slots.map((time, id) => (
                           <li key={id}>
                              <input
                                 onChange={handleTimeChange}
                                 type="radio"
                                 id={time.startTime}
                                 name="time"
                                 value={time.startTime}
                                 className="hidden peer"
                                 required
                              />
                              <label
                                 htmlFor={time.startTime}
                                 className="inline-flex items-center justify-between py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                 {time.startTime}
                              </label>
                           </li>
                        ))
                  )}
               </ul>
            </div>
            <hr />
            <h3 className="text-xl font-bold mt-4">Choose Service</h3>

            {services.map((service, id) => (
               <div
                  key={id}
                  className="flex items-center my-3 pl-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                     id={service.name}
                     type="checkbox"
                     value={service.name}
                     onChange={handleServiceChange}
                     name={service.name}
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                     htmlFor={service.name}
                     className="w-full flex items-center justify-between py-4 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                     <span>{service.name}</span>
                     <span>{service.price}</span>
                  </label>
               </div>
            ))}
            <button
               onClick={handleSubmit}
               className="w-full mt-6 block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
               Book Appointment
            </button>
         </div>
      </div>
   );
};

export default ProfileRight;
