import Awards from "./Awards/Awards";
import Bio from "./Bio/Bio";

import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Services from "./Services/Services";
import Specializations from "./Specializations/Specializations";

const Overview = ({ doctor }) => {
   return (
      <div>
         <Bio doctor={doctor} />
         <Education doctor={doctor} />
         <Experience doctor={doctor} />
         <Awards doctor={doctor} />
         <Services doctor={doctor} />
         <Specializations doctor={doctor} />
      </div>
   );
};

export default Overview;
