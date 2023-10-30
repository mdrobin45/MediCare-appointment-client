import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from "@material-tailwind/react";
import Availability from "./Availability/Availability";
import Locations from "./Locations/Locations";
import Overview from "./Overview/Overview";
import Reviews from "./Reviews/Reviews";

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
const AboutTabs = ({ doctor }) => {
   return (
      <div className="border p-6 my-16 min-h-[30rem] rounded-md">
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
               <TabPanel value="locations">
                  <Locations doctor={doctor} />
               </TabPanel>
               <TabPanel value="reviews">
                  <Reviews doctor={doctor} />
               </TabPanel>
               <TabPanel value="availability">
                  <Availability doctor={doctor} />
               </TabPanel>
            </TabsBody>
         </Tabs>
      </div>
   );
};

export default AboutTabs;
