import { useQuery } from "@tanstack/react-query";
import { getUserAppointments } from "../../Api/ApiRequest";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
   const { user } = useAuth();
   const email = user && user.email;

   // Load appointment with tan stack query
   const { isPending, data } = useQuery({
      queryKey: ["user", email],
      queryFn: () => getUserAppointments(email),
   });

   return (
      <div>
         {!isPending ? (
            <div>
               {data.map((item, index) => (
                  <span key={index}>{item.name}</span>
               ))}
            </div>
         ) : (
            "Loading"
         )}
      </div>
   );
};

export default Dashboard;
