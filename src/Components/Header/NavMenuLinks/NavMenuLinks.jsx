import { NavLink } from "react-router-dom";
import "./style.css";

const NavMenuLinks = () => {
   return (
      <div className="bg-gray-100 py-2 px-2 rounded-full">
         <div className="hidden sm:mx-6 sm:block">
            <div className="flex space-x-4">
               <NavLink
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page">
                  Home
               </NavLink>
               <NavLink
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium">
                  About
               </NavLink>
               <NavLink
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium">
                  Contact
               </NavLink>
               <NavLink
                  to="/doctors"
                  className="rounded-md px-3 py-2 text-sm font-medium">
                  Doctors
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default NavMenuLinks;
