import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import GoogleSignIn from "../FormFields/GoogleSignIn";
import PasswordField from "../FormFields/PasswordField";
import TextField from "../FormFields/TextField";
import { formValidation } from "./validation";

const RegisterForm = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { registerWithEmailPassword, profileUpdate } = useContext(AuthContext);
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      photoUrl: "",
      password: "",
   });

   // Onchange handler
   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const checkBox = e.target.checkbox.checked;

      // Form Validation
      const validationError = formValidation(
         formData.name,
         formData.email,
         formData.password,
         checkBox
      );

      // Throw validation error
      if (validationError) {
         setErrorMessage(validationError);
         return;
      }

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password signUp
      registerWithEmailPassword(formData.email, formData.password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: formData.name,
                  photoURL: formData.photoUrl,
               });

               // Get access token from server
               axios.post(
                  `${import.meta.env.VITE_SERVER_API}/token`,
                  {
                     name: formData.name,
                     email: formData.email,
                  },
                  { withCredentials: true }
               );

               // Show toast
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
               });
               navigate("/");
            }
         })
         .catch((err) => {
            toast.update(toastMsg, {
               render: "Registration failed!",
               type: "error",
               isLoading: false,
            });
            setErrorMessage(err.message);
         });
   };

   return (
      <div className="mx-auto w-[26rem] border rounded-md shadow-md">
         <h2 className="text-2xl px-6 pt-3 pb-3 font-bold">Sign Up</h2>
         <hr />
         <form className="w-full px-6" onSubmit={handleFormSubmit}>
            <TextField
               onChange={onChangeHandler}
               label="Full Name"
               name="name"
            />
            <TextField onChange={onChangeHandler} label="Email" name="email" />
            <PasswordField
               onChange={onChangeHandler}
               label="Password"
               name="password"
            />
            <TextField
               onChange={onChangeHandler}
               label="Photo URL"
               name="photoUrl"
            />
            <div className="inline-flex items-center pb-2">
               <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="checkbox-8"
                  data-ripple-dark="true">
                  <input
                     name="checkbox"
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
               <span className="">
                  I agreed to{" "}
                  <Link className="text-primary underline" to="/">
                     privacy policy
                  </Link>
               </span>
            </div>
            <p className="text-red-500 pb-3">{errorMessage}</p>
            <input
               className="middle cursor-pointer none center rounded-lg bg-secondary py-3 px-6 text-md font-semibold w-full text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="submit"
               value="Sign Up"
            />
            <GoogleSignIn />
         </form>
         <div className="text-center bg-[#f5f5f6] py-4 mt-6 w-full">
            <h2>
               Already have an account? Please login{" "}
               <Link
                  className="text-primary font-semibold underline"
                  to="/login">
                  Here
               </Link>
            </h2>
         </div>
      </div>
   );
};

export default RegisterForm;
