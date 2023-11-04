import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Containers/Header/Header";

const Root = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;