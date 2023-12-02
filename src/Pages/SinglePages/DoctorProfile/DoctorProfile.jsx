import PageHeader from "../../../Components/PageHeader/PageHeader.jsx";
import Profile from "./Profile.jsx";

const DoctorProfile = () => {
   return (
      <div>
         <PageHeader title="Doctor Profile" />
         <div className="px-2 sm:px-6 lg:px-8">
            <Profile />
         </div>
      </div>
   );
};

export default DoctorProfile;
