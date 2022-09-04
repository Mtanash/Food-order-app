import { useEffect } from "react";
import { createPortal } from "react-dom";
import CartModal from "./components/CartModal";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { selectCartItems } from "./slices/cartSlice";
import { useSelector } from "react-redux";
import { selectModalIsOpen } from "./slices/modalSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealPage from "./pages/MealPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals/:mealId" element={<MealPage />} />
        </Routes>
        {modalIsOpen && createPortal(<CartModal />, document.body)}
      </main>
    </BrowserRouter>
  );
}

export default App;
