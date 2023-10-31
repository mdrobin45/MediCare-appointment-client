import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleDoctor } from "../../../APIfetch/ApiFetch";
import ProfileLeft from "./ProfileLeft/ProfileLeft";

const Profile = () => {
   const { id } = useParams();

   // Fetch with tan stack query
   const { isPending, data } = useQuery({
      queryKey: ["doctor"],
      queryFn: () => getSingleDoctor(id),
   });

   return (
      <>
         {!isPending ? (
            <div className="flex gap-3 mt-16">
               <div className="w-2/3">
                  <ProfileLeft doctor={data} />
               </div>
               <div className="w-1/3">
                  <h2>Right</h2>
               </div>
            </div>
         ) : (
            <span>Loading</span>
         )}
      </>
   );
};

export default Profile;
