import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import styles from "../styles/components/CartModal.module.css";
import { ModalContext } from "../context/modalContext";

function CartModal() {
  const { cartItems } = useContext(CartContext);
  const { closeModal } = useContext(ModalContext);

  const cartItemsTotalPrices = cartItems.reduce(
    (prev, cur) => prev + cur.amount * +cur.data.price,
    0
  );

  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.data.id} {...item} />
      ))}
      <div className={styles.cartModalTotal}>
        <p className={styles.title}>Total</p>
        <p className={styles.price}>${cartItemsTotalPrices.toFixed(2)}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.closeButton} onClick={closeModal}>
          close
        </button>
        <button className={styles.orderButton}>order</button>
      </div>
    </>
  );
}

export default CartModal;
