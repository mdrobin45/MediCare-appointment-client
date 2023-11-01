import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import About from "../Pages/About/About";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DoctorProfile from "../Pages/SinglePages/DoctorProfile/DoctorProfile";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <span>Page not found</span>,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/booking",
            element: <Booking />,
         },
         {
            path: "/doctors/:id",
            element: <DoctorProfile />,
         },
      ],
   },
]);

export default router;
