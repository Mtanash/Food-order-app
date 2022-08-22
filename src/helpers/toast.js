import { toast } from "react-toastify";

const toastNotify = (text) =>
  toast.success(text, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export default toastNotify;
