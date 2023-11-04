import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../MyContext/AuthContextProvider";
import { showErrorToast, showSuccessToast } from "../Utils/toast";

const useGoogleSignIn = () => {
   const { loginWithGoogle } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               showSuccessToast("Login Successful!", "success");
               navigate(state ? state.prevUrl : "/");
            }
         })
         .catch((err) => {
            if (err) {
               showErrorToast("Something went wrong!", "error");
            }
         });
   };

   return handleGoogleSignIn;
};

export default useGoogleSignIn;
