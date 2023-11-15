import { toast } from "react-toastify";

// Success toast
const showToast = (message, type) => {
   showToastMsg(message, type);
};

// // Error toast
// const showErrorToast = (message, type) => {
//    showToast(message, type);
// };

// // Waiting toast
// const waitingToast = (message, loading) => {
//    showToast(message, loading);
// };

// Toast initialize
const showToastMsg = (message, type, loading) => {
   const toastMsg = toast.loading("");
   toast.update(toastMsg, {
      render: message,
      type: type,
      isLoading: loading ? true : false,
      autoClose: 1500,
   });
};

export { showToast };
