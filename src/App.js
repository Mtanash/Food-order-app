import { useContext } from "react";
import { createPortal } from "react-dom";
import CartModal from "./components/CartModal";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Meals from "./components/Meals";
import { ModalContext } from "./context/modalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { modalIsOpen } = useContext(ModalContext);

  const notifyOrderRegistered = () =>
    toast.success("Order saved, Thank you!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Header />
      <Hero />
      <Meals />
      {modalIsOpen &&
        createPortal(
          <CartModal notifyOrderRegistered={notifyOrderRegistered} />,
          document.body
        )}
    </main>
  );
}

export default App;
