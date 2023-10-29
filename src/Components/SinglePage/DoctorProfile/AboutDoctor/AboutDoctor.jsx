import AboutDoctorLeft from "./AboutDoctorLeft";
import AboutDoctorRight from "./AboutDoctorRight";

const AboutDoctor = ({ doctor }) => {
   return (
      <div className="flex items-center justify-between border p-6 mt-16 rounded-md">
         <AboutDoctorLeft doctor={doctor} />
         <AboutDoctorRight doctor={doctor} />
      </div>
   );
};

export default AboutDoctor;
