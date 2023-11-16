import { FaBriefcaseMedical, FaWallet } from "react-icons/fa";
import { FaTableColumns } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./style.css";

import { Nav, Sidenav } from "rsuite";
import useAuth from "../Hooks/useAuth";

const styles = {
   width: 240,
   display: "inline-table",
   marginRight: 10,
};
const SideNavLink = ({
   appearance,
   openKeys,
   expanded,
   onOpenChange,
   ...navProps
}) => {
   const { user } = useAuth();
   return (
      <div style={styles}>
         <Sidenav
            appearance={appearance}
            expanded={expanded}
            openKeys={openKeys}
            onOpenChange={onOpenChange}>
            <Sidenav.Body>
               <div>
                  <img
                     className="rounded-full mx-auto my-6"
                     src={user?.photoURL}
                     alt="Profile"
                  />
               </div>
               <Nav {...navProps}>
                  <Nav.Item
                     as={NavLink}
                     to="/patient/dashboard"
                     classPrefix="dashboardLink"
                     className="flex items-center gap-3 px-3 text-[16px] py-3 focus:bg-[#1675e0] hover:bg-[#1675e0] overflow-hidden relative"
                     eventKey="1">
                     <FaTableColumns />
                     Dashboard
                  </Nav.Item>
                  <Nav.Item
                     as={NavLink}
                     to="/patient/appointments"
                     classPrefix="dashboardLink"
                     className="flex items-center gap-3 px-3 text-[16px] py-3 focus:bg-[#1675e0] hover:bg-[#1675e0] overflow-hidden relative"
                     eventKey="2">
                     <FaBriefcaseMedical />
                     Appointments
                  </Nav.Item>
                  <Nav.Item
                     as={NavLink}
                     to="/patient/payment-history"
                     classPrefix="dashboardLink"
                     className="flex items-center gap-3 px-3 text-[16px] py-3 focus:bg-[#1675e0] hover:bg-[#1675e0] overflow-hidden relative"
                     eventKey="3">
                     <FaWallet />
                     Payment History
                  </Nav.Item>
               </Nav>
            </Sidenav.Body>
         </Sidenav>
      </div>
   );
};

export default SideNavLink;
