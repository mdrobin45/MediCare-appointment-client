import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from "@material-tailwind/react";
import Overview from "./Overview/Overview";

const tabList = [
   {
      label: "Overview",
      value: "overview",
   },
   {
      label: "Locations",
      value: "locations",
   },

   {
      label: "Reviews",
      value: "reviews",
   },
   {
      label: "Availability",
      value: "availability",
   },
];
const MoreAboutDoctor = ({ doctor }) => {
   return (
      <div className="border p-6 mt-16 rounded-md">
         <Tabs value="overview">
            <TabsHeader>
               {tabList.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                     {label}
                  </Tab>
               ))}
            </TabsHeader>
            <TabsBody>
               <TabPanel value="overview">
                  <Overview doctor={doctor} />
               </TabPanel>
            </TabsBody>
         </Tabs>
      </div>
   );
};

export default MoreAboutDoctor;
