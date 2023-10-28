import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../MyContext/AuthContextProvider";

const UserDropdown = ({ showUserDropdown }) => {
   const { user, logOut } = useContext(AuthContext);

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
   };
   return (
      <div
         className={`z-10 ${
            !showUserDropdown ? "hidden" : ""
         } absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
         <div className="px-4 py-3 text-sm text-gray-900">
            <div>{user && user.displayName}</div>
            <div className="font-medium truncate">
               {user.email && user.email}
            </div>
         </div>
         <div className="py-1">
            <button
               onClick={handleLogOut}
               className="block w-full font-barlow uppercase text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
               Sign Out
            </button>
         </div>
      </div>
   );
};

export default UserDropdown;
