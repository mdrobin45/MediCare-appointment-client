import Counter from "./Counter/Counter";
import PatientChart from "./PatientChart/PatientChart";

const DoctorDashboard = () => {
   return (
      <div>
         <PatientChart />
         <Counter />
      </div>
   );
};

export default DoctorDashboard;
