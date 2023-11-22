import { FaBriefcaseMedical, FaWallet, FaWheelchair } from "react-icons/fa";
import { FaTableColumns } from "react-icons/fa6";
import "./style.css";

import { Nav, Sidenav } from "rsuite";
import DashboardNavLink from "../Components/Dashboard/DashboardNavLink/DashboardNavLink";
import useAuth from "../Hooks/SharedHooks/useAuth";
import useUserRole from "../Hooks/SharedHooks/useUserRole";

const styles = {
   width: 240,
   display: "inline-table",
   marginRight: 10,
};

// Patient nav links
const patientNav = [
   {
      name: "Dashboard",
      link: "/patient/dashboard",
      icon: <FaTableColumns />,
   },
   {
      name: "Appointments",
      link: "/patient/appointments",
      icon: <FaBriefcaseMedical />,
   },
   {
      name: "Payment History",
      link: "/patient/payment-history",
      icon: <FaWallet />,
   },
];

// Doctor nav links
const doctorNav = [
   {
      name: "Dashboard",
      link: "/doctor/dashboard",
      icon: <FaTableColumns />,
   },
   {
      name: "Appointments",
      link: "/doctor/appointments",
      icon: <FaBriefcaseMedical />,
   },
   {
      name: "My Patients",
      link: "/doctor/my-patients",
      icon: <FaWheelchair />,
   },
];

// Doctor nav links
const adminNav = [
   {
      name: "Dashboard",
      link: "/admin/dashboard",
      icon: <FaTableColumns />,
   },
   {
      name: "Appointments",
      link: "/admin/appointments",
      icon: <FaBriefcaseMedical />,
   },
   {
      name: "All Doctors",
      link: "/admin/all-doctors",
      icon: <FaWheelchair />,
   },
];
const SideNavLink = (props) => {
   const { userRole } = useUserRole();
   const { appearance, openKeys, expanded, onOpenChange, ...navProps } = props;
   const { user } = useAuth();

   return (
      <div style={styles}>
         <Sidenav
            appearance={appearance}
            expanded={expanded}
            openKeys={openKeys}
            onOpenChange={onOpenChange}>
            <Sidenav.Body>
               <div className="w-40 h-40 rounded-full overflow-hidden my-6 mx-auto">
                  <img
                     className="w-full h-full"
                     src={user?.photoURL}
                     alt="Profile"
                  />
               </div>
               {userRole === "admin" ? (
                  <Nav {...navProps}>
                     {adminNav.map((nav, index) => (
                        <DashboardNavLink
                           key={index}
                           url={nav.link}
                           text={nav.name}
                           icon={nav.icon}
                           eventKey={index}
                        />
                     ))}
                  </Nav>
               ) : userRole === "patient" ? (
                  <Nav {...navProps}>
                     {patientNav.map((nav, index) => (
                        <DashboardNavLink
                           key={index}
                           url={nav.link}
                           text={nav.name}
                           icon={nav.icon}
                           eventKey={index}
                        />
                     ))}
                  </Nav>
               ) : userRole === "doctor" ? (
                  <Nav {...navProps}>
                     {doctorNav.map((nav, index) => (
                        <DashboardNavLink
                           key={index}
                           url={nav.link}
                           text={nav.name}
                           icon={nav.icon}
                           eventKey={index}
                        />
                     ))}
                  </Nav>
               ) : (
                  ""
               )}
            </Sidenav.Body>
         </Sidenav>
      </div>
   );
};

export default SideNavLink;
