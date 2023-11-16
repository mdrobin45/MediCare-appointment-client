import { FaBriefcaseMedical } from "react-icons/fa";
import { FaTableColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Nav, Sidenav } from "rsuite";

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
   return (
      <div style={styles}>
         <Sidenav
            appearance={appearance}
            expanded={expanded}
            openKeys={openKeys}
            onOpenChange={onOpenChange}>
            <Sidenav.Body>
               <Nav {...navProps}>
                  <Nav.Item eventKey="1">
                     <Link
                        className="flex items-center gap-3"
                        to="/patient/dashboard">
                        <FaTableColumns /> Dashboard
                     </Link>
                  </Nav.Item>

                  <Nav.Item eventKey="2">
                     <Link
                        className="flex items-center gap-3"
                        to="/patient/appointments">
                        <FaBriefcaseMedical />
                        Appointments
                     </Link>
                  </Nav.Item>
               </Nav>
            </Sidenav.Body>
         </Sidenav>
      </div>
   );
};

export default SideNavLink;
