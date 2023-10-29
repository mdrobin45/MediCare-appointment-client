import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import TabPanel from "./TabPanel";
import tabSwitch from "./tabSwitch";

const Overview = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className="border p-6 mt-16 rounded-md">
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <Tabs
                  value={value}
                  variant="fullWidth"
                  onChange={handleChange}
                  aria-label="basic tabs example">
                  <Tab label="Item One" {...tabSwitch(0)} />
                  <Tab label="Item Two" {...tabSwitch(1)} />
                  <Tab label="Item Three" {...tabSwitch(2)} />
                  <Tab label="Item Four" {...tabSwitch(3)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
               Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
               Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
               Item Four
            </TabPanel>
         </Box>
      </div>
   );
};

export default Overview;
