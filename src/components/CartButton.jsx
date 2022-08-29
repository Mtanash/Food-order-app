import { useEffect, useRef } from "react";
import { IoCart } from "react-icons/io5";
import { selectCartItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "../styles/components/CartButton.module.css";
import { openModal } from "../slices/modalSlice";

function CartButton() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

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

  const onCartButtonClick = () => {
    dispatch(openModal());
  };

  return (
    <button
      className={styles.cartButton}
      onClick={onCartButtonClick}
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
