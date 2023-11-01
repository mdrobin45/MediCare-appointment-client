import { useLocation } from "react-router-dom";

const Summary = () => {
   const { state } = useLocation();
   const { meetDate, time, doctorName, selectedService } = state;

   // Calculate services price
   const total = selectedService.reduce((accumulator, object) => {
      return accumulator + parseFloat(object.price);
   }, 0);

   return (
      <div className="w-1/3 border rounded-b-md sticky top-6">
         <div className="bg-primary text-white p-6 rounded-t-md">
            <h2 className="text-2xl font-bold">Summary</h2>
         </div>
         <div className="p-6">
            <div className="flex items-center justify-between">
               <p className="text-gray-900">Date</p>
               <p className="text-gray-900">{meetDate}</p>
            </div>
            <div className="flex items-center justify-between pt-3">
               <p className="text-gray-900">Time</p>
               <p className="text-gray-900">{time}</p>
            </div>
            <div className="flex items-center justify-between pt-3">
               <p className="text-gray-900">Doctor Name</p>
               <p className="text-gray-900">{doctorName}</p>
            </div>
            <div className="py-3">
               <hr />
            </div>

            {selectedService.map((service, index) => (
               <div
                  key={index}
                  className="flex items-center justify-between py-2">
                  <p className="text-gray-900">{service.name}</p>
                  <p className="text-gray-900">${service.price}</p>
               </div>
            ))}
            <div className="py-3">
               <hr />
            </div>
            <div className="flex items-center justify-between">
               <p className="text-gray-900 font-bold">Total</p>
               <p className="text-gray-900 font-bold">${total}</p>
            </div>
            <button className="w-full mt-7 block text-center text-md border-2 border-secondary hover:text-secondary hover:bg-transparent bg-secondary text-white rounded-md py-3">
               Confirm and Pay
            </button>
         </div>
      </div>
   );
};

export default Summary;
