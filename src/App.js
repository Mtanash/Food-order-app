import { useContext } from "react";
import { createPortal } from "react-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import { ModalContext } from "./context/modalContext";

function App() {
  const { modalIsOpen } = useContext(ModalContext);

  return (
    <main>
      <Header />
      <Hero />
      <Meals />
      {modalIsOpen && createPortal(<Modal />, document.body)}
    </main>
  );
}

export default App;
