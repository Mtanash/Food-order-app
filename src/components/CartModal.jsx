import { useState, useCallback } from "react";
import CartItem from "./CartItem";
import styles from "../styles/components/CartModal.module.css";
import Modal from "./Modal";
import Checkout from "./Checkout";
import { selectCartItems } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../slices/modalSlice";
import toastNotify from "../helpers/toast";

function CartModal() {
  const [checkingOut, setCheckingOut] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cartItemsTotalPrices = cartItems.reduce(
    (prev, cur) => prev + cur.amount * +cur.data.price,
    0
  );

  const handleOrderButtonClick = () => {
    if (cartItems.length < 1) {
      toastNotify("Cart is empty!");
      return;
    }
    setCheckingOut(true);
  };

  const closeCheckingOut = useCallback(() => setCheckingOut(false), []);

  const onCloseButtonClick = () => {
    dispatch(closeModal());
  };

  return (
    <Modal>
      {checkingOut ? (
        <Checkout closeCheckingOut={closeCheckingOut} />
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.data.id} {...item} />
          ))}
          <div className={styles.cartModalTotal}>
            <p className={styles.title}>Total</p>
            <p className={styles.price}>${cartItemsTotalPrices.toFixed(2)}</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.closeButton} onClick={onCloseButtonClick}>
              close
            </button>
            <button
              className={styles.orderButton}
              onClick={handleOrderButtonClick}
            >
              order
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default CartModal;
