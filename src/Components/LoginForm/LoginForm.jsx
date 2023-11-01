import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { generateToken } from "../../Api/Api";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import GoogleSignIn from "../FormFields/GoogleSignIn";
import PasswordField from "../FormFields/PasswordField";
import TextField from "../FormFields/TextField";

const LoginForm = () => {
   const { loginWithEmailPassword } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   // Onchange handler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password login
      loginWithEmailPassword(formData.email, formData.password)
         .then((result) => {
            if (result.user) {
               const { displayName, email } = result.user;

               // Server token request
               generateToken({
                  name: displayName,
                  email: email,
               });

               // Update toast
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
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };

   return (
      <div className="flex h-[80vh] flex-col justify-center items-center">
         <div className="mx-auto w-[26rem] border rounded-md shadow-md">
            <h2 className="text-2xl px-6 pt-3 pb-3 font-bold">Sign In</h2>
            <hr />
            <form className="w-full px-6" onSubmit={handleFormSubmit}>
               <TextField
                  onChange={onChangeHandler}
                  label="Email"
                  name="email"
               />
               <PasswordField
                  onChange={onChangeHandler}
                  label="Password"
                  name="password"
               />
               <div className="flex items-center justify-between">
                  <div className="inline-flex items-center pb-4 pt-2">
                     <label
                        className="relative flex items-center rounded-full cursor-pointer"
                        htmlFor="checkbox-8"
                        data-ripple-dark="true">
                        <input
                           type="checkbox"
                           className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                           id="checkbox-8"
                        />

                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1">
                              <path
                                 fillRule="evenodd"
                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                 clipRule="evenodd"></path>
                           </svg>
                        </div>
                     </label>
                     <span className="pl-2">Remember me</span>
                  </div>
                  <div>
                     <Link className="text-primary" to="/">
                        Recover Password
                     </Link>
                  </div>
               </div>
               <input
                  className="middle cursor-pointer none center rounded-lg bg-secondary py-3 px-6 text-md font-semibold w-full text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  value="Sign In"
               />
               <GoogleSignIn />
            </form>
            <div className="text-center bg-[#f5f5f6] py-4 mt-6 w-full">
               <h2>
                  {`Don't have an account? Please register`}{" "}
                  <Link
                     className="text-primary font-semibold underline"
                     to="/register">
                     Here
                  </Link>
               </h2>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
