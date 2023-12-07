import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./MyContext/AuthContextProvider.jsx";
import router from "./Router/Router.jsx";
import theme from "./Theme/Theme.jsx";
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
               <RouterProvider router={router} />
               <ToastContainer
                  position="top-center"
                  autoClose={1500}
                  theme="light"
               />
            </QueryClientProvider>
         </AuthContextProvider>
      </ThemeProvider>
   </React.StrictMode>
);
