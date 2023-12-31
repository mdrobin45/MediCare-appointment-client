import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Booking from "../Pages/Booking/Booking";
import DoctorAppointments from "../Pages/Dashboard/Doctor/Appointments/DoctorAppointments";
import DoctorDashboard from "../Pages/Dashboard/Doctor/DoctorDashboard/DoctorDashboard";
import MyPatients from "../Pages/Dashboard/Doctor/MyPatients";
import PatientAppointments from "../Pages/Dashboard/Patient/PatientAppointments";
import PatientDashboard from "../Pages/Dashboard/Patient/PatientDashboard";
import PaymentHistory from "../Pages/Dashboard/Patient/PaymentHistory";
import Doctors from "../Pages/Doctors/Doctors";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DoctorProfile from "../Pages/SinglePages/DoctorProfile/DoctorProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
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
            path: "/doctors",
            element: <Doctors />,
         },
         {
            path: "/booking",
            element: (
               <PrivateRoute>
                  <Booking />
               </PrivateRoute>
            ),
         },
         {
            path: "/doctors/:id",
            element: <DoctorProfile />,
         },
      ],
   },
   {
      path: "/patient",
      element: <Dashboard />,
      children: [
         {
            path: "dashboard",
            element: <PatientDashboard />,
         },
         {
            path: "appointments",
            element: <PatientAppointments />,
         },
         {
            path: "payment-history",
            element: <PaymentHistory />,
         },
      ],
   },
   {
      path: "/doctor",
      element: <Dashboard />,
      children: [
         {
            path: "dashboard",
            element: <DoctorDashboard />,
         },
         {
            path: "appointments",
            element: <DoctorAppointments />,
         },
         {
            path: "my-patients",
            element: <MyPatients />,
         },
      ],
   },
]);

export default router;
