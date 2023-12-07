import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
         // {
         //    path: "/doctors",
         //    element: <Doctors />,
         // },
         // {
         //    path: "/booking",
         //    element: <Booking />,
         // },
         // {
         //    path: "/doctors/:id",
         //    element: <DoctorProfile />,
         // },
      ],
   },
   // {
   //    path: "/patient",
   //    element: <Dashboard />,
   //    children: [
   //       {
   //          path: "dashboard",
   //          element: <PatientDashboard />,
   //       },
   //       {
   //          path: "appointments",
   //          element: <PatientAppointments />,
   //       },
   //       {
   //          path: "payment-history",
   //          element: <PaymentHistory />,
   //       },
   //    ],
   // },
   // {
   //    path: "/doctor",
   //    element: <Dashboard />,
   //    children: [
   //       {
   //          path: "dashboard",
   //          element: <DoctorDashboard />,
   //       },
   //       {
   //          path: "appointments",
   //          element: <DoctorAppointments />,
   //       },
   //       {
   //          path: "my-patients",
   //          element: <MyPatients />,
   //       },
   //    ],
   // },
]);

export default router;
