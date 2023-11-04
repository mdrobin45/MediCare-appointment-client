import { toast } from "react-toastify";

// Success toast
const showSuccessToast = (message, type) => {
   showToast(message, type);
};

// Error toast
const showErrorToast = (message, type) => {
   showToast(message, type);
};

// Toast initialize
const showToast = (message, type) => {
   const toastMsg = toast.loading("");
   toast.update(toastMsg, {
      render: message,
      type: type,
      isLoading: false,
      autoClose: 1500,
   });
};

export { showErrorToast, showSuccessToast };
