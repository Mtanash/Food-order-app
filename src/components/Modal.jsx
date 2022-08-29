import styles from "../styles/components/Modal.module.css";
import Card from "../ui/Card";
import { useDispatch } from "react-redux";
import { closeModal } from "../slices/modalSlice";

function Modal({ children }) {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    if (e.target.id === "overlay") {
      dispatch(closeModal());
    }
  };

  return (
    <section id="overlay" className={styles.modal} onClick={handleCloseModal}>
      <Card className={styles.modalBody}>{children}</Card>
    </section>
  );
}

export default Modal;
