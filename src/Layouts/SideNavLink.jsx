import { FaBriefcaseMedical, FaWallet, FaWheelchair } from "react-icons/fa";
import { FaTableColumns } from "react-icons/fa6";
import "./style.css";

import { Nav, Sidenav } from "rsuite";
import DashboardNavLink from "../Components/Dashboard/DashboardNavLink/DashboardNavLink";
import useAuth from "../Hooks/SharedHooks/useAuth";

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
const adminNav = [
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
const SideNavLink = (props) => {
   const { appearance, openKeys, expanded, onOpenChange, ...navProps } = props;
   const { user } = useAuth();
   const admin = true;
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
               {admin ? (
                  <Nav {...navProps}>
                     {adminNav.map((nav, index) => (
                        <DashboardNavLink
                           key={nav.index}
                           url={nav.link}
                           text={nav.name}
                           icon={nav.icon}
                           eventKey={index}
                        />
                     ))}
                  </Nav>
               ) : (
                  <Nav {...navProps}>
                     {patientNav.map((nav, index) => (
                        <DashboardNavLink
                           key={nav.index}
                           url={nav.link}
                           text={nav.name}
                           icon={nav.icon}
                           eventKey={index}
                        />
                     ))}
                  </Nav>
               )}
            </Sidenav.Body>
         </Sidenav>
      </div>
   );
};

export default SideNavLink;
