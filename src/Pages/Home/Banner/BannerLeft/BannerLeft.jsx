import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
const BannerLeft = () => {
   return (
      <div className="w-full md:w-2/4">
         <h3 className="text-md md:text-xl text-secondary">
            Welcome to MadiCare
         </h3>
         <h1 className="text-4xl lg:text-6xl font-bold py-3">
            We Are <span className="text-primary">Committed</span> To Your
            Health
         </h1>
         <p>
            It is a established fact that a reader will be distracted by the
            content of a page when looking at this layout.
         </p>
         <Button component={RouterLink} to="/about" variant="contained">
            Meed Doctor
         </Button>
         <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left py-4">
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">355k+</h2>
               <p>Recovered Patients</p>
            </div>
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">98%</h2>
               <p>Good Review</p>
            </div>
            <div className="my-4 md:my-0">
               <h2 className="font-bold text-gray-800 text-4xl">120+</h2>
               <p>Popular Doctors</p>
            </div>
         </div>
      </div>
   );
};

export default BannerLeft;
