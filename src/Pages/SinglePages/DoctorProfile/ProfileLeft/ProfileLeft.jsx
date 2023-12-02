import AboutDoctor from "./AboutDoctor/AboutDoctor";
import AboutTabs from "./AboutTabs/AboutTabs";

const ProfileLeft = ({ doctor }) => {
   return (
      <div>
         <AboutDoctor doctor={doctor} />
         <AboutTabs doctor={doctor} />
      </div>
   );
};

export default ProfileLeft;
