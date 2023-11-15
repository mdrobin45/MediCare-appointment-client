import { Radio, RadioGroup } from "rsuite";
import TextField from "../../../Components/BookingFormFields/TextField";

const AppointmentForm = ({
   changeHandler,
   appointmentData,
   setAppointmentData,
}) => {
   const formFields = [
      {
         label: "Enter your name",
         name: "name",
         value: appointmentData.name,
      },
      {
         label: "Your email",
         name: "email",
         value: appointmentData.email,
      },
      {
         label: "Your phone",
         name: "phone",
         value: appointmentData.phone,
      },
      {
         label: "Your age",
         name: "age",
         value: appointmentData.age,
      },
      {
         label: "Address",
         name: "address",
         value: appointmentData.address,
      },
      {
         label: "City",
         name: "city",
         value: appointmentData.city,
      },
   ];
   return (
      <div className="w-2/3 border rounded-md">
         <div className="bg-primary text-white p-6 rounded-t-md">
            <h2 className="text-2xl font-bold">Appointment Information</h2>
         </div>
         <form className="mt-10 p-6">
            <h2 className="text-xl font-bold pb-3">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6">
               {formFields.map((field, index) => (
                  <TextField
                     key={index}
                     changeHandler={changeHandler}
                     value={field.value}
                     label={field.label}
                     name={field.name}
                  />
               ))}
            </div>
            <RadioGroup
               className="mt-4"
               inline
               name="gender"
               value={appointmentData.gender}
               onChange={(e) =>
                  setAppointmentData((prev) => ({
                     ...prev,
                     gender: e,
                  }))
               }>
               <Radio value="male">Male</Radio>
               <Radio value="female">Female</Radio>
            </RadioGroup>
            <div className="w-full mt-4">
               <div className="relative w-full min-w-[200px]">
                  <textarea
                     name="note"
                     onChange={changeHandler}
                     className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                     placeholder=" "></textarea>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Note (Optional)
                  </label>
               </div>
            </div>
         </form>
      </div>
   );
};

export default AppointmentForm;
