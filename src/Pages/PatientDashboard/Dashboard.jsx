import { useEffect } from "react";
import { getUserAppointments } from "../../Api/Api";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
   const { user } = useAuth();

   useEffect(() => {
      getUserAppointments(user && user.email).then((res) => console.log(res));
   }, [user]);
   console.log(user);
   return (
      <div>
         <h2>Dashboard</h2>
      </div>
   );
};

export default Dashboard;
