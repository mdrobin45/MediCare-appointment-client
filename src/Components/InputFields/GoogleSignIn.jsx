import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const GoogleSignIn = () => {
   const { loginWithGoogle } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGoogleSignIn = () => {
      loginWithGoogle()
         .then((result) => {
            if (result.user) {
               const toastMsg = toast.loading("");
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               if (state !== null) {
                  navigate(state.prevUrl);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               const toastMsg = toast.loading("");
               toast.update(toastMsg, {
                  render: "Something went wrong!",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };

   return (
      <button
         onClick={handleGoogleSignIn}
         className="px-4 w-full mt-4 justify-center mx-auto py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
         <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
         />
         <span className="dark:text-gray-200 ">Continue with Google</span>
      </button>
   );
};

export default GoogleSignIn;
