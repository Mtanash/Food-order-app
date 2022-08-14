import { useContext, useEffect, useRef } from "react";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../context/cartContext";
import { ModalContext } from "../context/modalContext";
import styles from "../styles/components/CartButton.module.css";

function CartButton() {
  const { openModal } = useContext(ModalContext);
  const { cartItems } = useContext(CartContext);

  const cartButtonRef = useRef();

  useEffect(() => {
    cartButtonRef.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(.8)" },
        { transform: "scale(1)" },
      ],
      { duration: 200 }
    );
  }, [cartItems]);

  const cartItemsCount = cartItems.reduce((prev, cur) => prev + cur.amount, 0);

  return (
    <button
      className={styles.cartButton}
      onClick={openModal}
      ref={cartButtonRef}
    >
      <IoCart className={styles.icon} />
      {cartItemsCount > 0 && (
        <span className={styles.cartLabel}>{cartItemsCount}</span>
      )}
    </button>
  );
}

export default CartButton;
