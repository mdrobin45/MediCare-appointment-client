import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavLink from "./SideNavLink";

const Dashboard = () => {
   const [activeKey, setActiveKey] = useState("1");
   const [openKeys, setOpenKeys] = useState(["3", "4"]);
   const [expanded, setExpand] = useState(true);
   return (
      <div className="flex">
         <SideNavLink
            className="h-screen"
            appearance="inverse"
            activeKey={activeKey}
            openKeys={openKeys}
            onSelect={setActiveKey}
            onOpenChange={setOpenKeys}
            expanded={expanded}
            onExpand={setExpand}
         />
         <div className="w-3/4 my-4 mx-auto">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
