import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleDoctor } from "../../../APIfetch/ApiFetch";
import AboutDoctor from "./AboutDoctor/AboutDoctor";
import Overview from "./Overview/Overview";

const Profile = () => {
   const { id } = useParams();

   // Fetch with tan stack query
   const { isPending, data } = useQuery({
      queryKey: ["doctor"],
      queryFn: () => getSingleDoctor(id),
   });

   return (
      <div>
         {!isPending ? (
            <>
               <AboutDoctor doctor={data} />
               <Overview />
            </>
         ) : (
            <span>Loading</span>
         )}
      </div>
   );
};

export default Profile;
