import { useEffect } from "react";
import { createPortal } from "react-dom";
import CartModal from "./components/CartModal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Meals from "./components/Meals";
import { ToastContainer } from "react-toastify";
import { selectCartItems } from "./slices/cartSlice";
import { useSelector } from "react-redux";
import { selectModalIsOpen } from "./slices/modalSlice";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={2500}
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
      {modalIsOpen && createPortal(<CartModal />, document.body)}
    </main>
  );
}

export default App;
