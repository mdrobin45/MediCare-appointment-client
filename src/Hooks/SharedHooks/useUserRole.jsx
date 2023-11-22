import { useQuery } from "@tanstack/react-query";
import usePublicApiRequest from "../API/PublicApi/usePublicApiRequest";
import useAuth from "./useAuth";

const useUserRole = () => {
   const { user } = useAuth();
   const { getUserRole } = usePublicApiRequest();

   // Request server for getting user role
   const { isPending, data: dbUser = {} } = useQuery({
      queryKey: ["userRole", user],
      queryFn: () => getUserRole(user?.email),
   });

   const userRole = dbUser?.role;

   return { userRole, isPending };
};

export default useUserRole;
