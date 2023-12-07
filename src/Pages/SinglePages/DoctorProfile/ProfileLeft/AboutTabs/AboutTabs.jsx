import { useState } from "react";

import Availability from "./Availability/Availability";
import Locations from "./Locations/Locations";
import Overview from "./Overview/Overview";
import Reviews from "./Reviews/Reviews";

const Navbar = ({ active, onSelect, ...props }) => {
   return (
      // <Nav
      //    justified
      //    {...props}
      //    activeKey={active}
      //    onSelect={onSelect}
      //    style={{ marginBottom: 50 }}>
      //    <Nav.Item eventKey="overview">Overview</Nav.Item>
      //    <Nav.Item eventKey="locations">Locations</Nav.Item>
      //    <Nav.Item eventKey="reviews">Reviews</Nav.Item>
      //    <Nav.Item eventKey="availability">Availability</Nav.Item>
      // </Nav>
   );
};
const AboutTabs = ({ doctor }) => {
   const [active, setActive] = useState("overview");
   return (
      <div className="border p-6 my-16 min-h-[30rem] rounded-md">
         <Navbar appearance="tabs" active={active} onSelect={setActive} />
         {active === "overview" && <Overview doctor={doctor} />}
         {active === "locations" && <Locations doctor={doctor} />}
         {active === "reviews" && <Reviews doctor={doctor} />}
         {active === "availability" && <Availability doctor={doctor} />}
      </div>
   );
};

export default AboutTabs;
