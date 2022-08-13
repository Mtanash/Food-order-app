import { useContext } from "react";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../context/cartContext";
import { ModalContext } from "../context/modalContext";
import styles from "../styles/components/CartButton.module.css";

function CartButton() {
  const { openModal } = useContext(ModalContext);
  const { cartItems } = useContext(CartContext);

  const cartItemsCount = cartItems.reduce((prev, cur) => prev + cur.amount, 0);

  return (
    <button className={styles.cartButton} onClick={openModal}>
      <IoCart className={styles.icon} />
      {cartItemsCount > 0 && (
        <span className={styles.cartLabel}>{cartItemsCount}</span>
      )}
    </button>
  );
}

export default CartButton;
