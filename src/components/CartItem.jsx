import styles from "../styles/components/CartItem.module.css";
import truncateString from "../helpers/truncateString";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({ data: { id, name, description, picture, price }, amount }) {
  const { increaseItemCount, decreaseItemCount, removeItemFromCart } =
    useContext(CartContext);

  const handleIncreaseMealCount = () => {
    increaseItemCount(id);
  };

  const handleDecreaseMealCount = () => {
    if (amount < 2) {
      removeItemFromCart(id);
    } else {
      decreaseItemCount(id);
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={picture} alt={name} />
      <div className={styles.cartItemDetails}>
        <h4>{name}</h4>
        <p>{truncateString(description, 50)}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <p className={styles.amount}>x{amount}</p>
      <div className={styles.buttons}>
        <button onClick={handleDecreaseMealCount}>
          <AiOutlineMinus />
        </button>
        <button onClick={handleIncreaseMealCount}>
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
