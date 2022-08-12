import React, { useState } from "react";

const modalDefaultState = {
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = React.createContext(modalDefaultState);

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
