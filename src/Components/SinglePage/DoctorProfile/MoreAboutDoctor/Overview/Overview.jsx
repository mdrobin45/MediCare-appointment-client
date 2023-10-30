import Bio from "./Bio";
import Education from "./Education";

const Overview = ({ doctor }) => {
   return (
      <div>
         <Bio doctor={doctor} />
         <Education doctor={doctor} />
      </div>
   );
};

export default Overview;
