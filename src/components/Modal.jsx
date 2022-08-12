import { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import styles from "../styles/components/Modal.module.css";
import Card from "../ui/Card";
import CartModal from "./CartModal";

function Modal() {
  const { closeModal } = useContext(ModalContext);

  const handleCloseModal = (e) => {
    if (e.target.id === "overlay") {
      closeModal();
    }
  };

  return (
    <section id="overlay" className={styles.modal} onClick={handleCloseModal}>
      <Card className={styles.modalBody}>
        <CartModal />
      </Card>
    </section>
  );
}

export default Modal;
