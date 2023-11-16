import { NavLink } from "react-router-dom";
import { Nav } from "rsuite";

const DashboardNavLink = ({ url, text, icon, eventKey }) => {
   return (
      <Nav.Item
         as={NavLink}
         to={url}
         classPrefix="dashboardLink"
         className="flex hover:text-white focus:text-white items-center gap-3 px-3 text-[16px] py-3 focus:bg-[#1675e0] hover:bg-[#1675e0] overflow-hidden relative"
         eventKey={eventKey}>
         {icon}
         {text}
      </Nav.Item>
   );
};

export default DashboardNavLink;
