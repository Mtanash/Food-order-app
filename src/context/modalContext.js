import React, { useState } from "react";

const modalDefaultState = {
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = React.createContext(modalDefaultState);

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "auto";
    setModalIsOpen(false);
  };
  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
