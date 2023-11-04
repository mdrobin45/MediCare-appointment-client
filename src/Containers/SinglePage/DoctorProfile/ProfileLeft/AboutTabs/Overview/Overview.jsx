import Awards from "./Awards";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Services from "./Services";
import Specializations from "./Specializations";

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
