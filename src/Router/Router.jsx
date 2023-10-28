import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <span>Page not found</span>,
      children: [
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
      ],
   },
]);

export default router;
