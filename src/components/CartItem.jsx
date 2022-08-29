import styles from "../styles/components/CartItem.module.css";
import truncateString from "../helpers/truncateString";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseItemCount, increaseItemCount } from "../slices/cartSlice";

function CartItem({ data: { id, name, description, picture, price }, amount }) {
  const dispatch = useDispatch();

  const handleIncreaseMealCount = () => {
    dispatch(increaseItemCount(id));
  };

  const handleDecreaseMealCount = () => {
    dispatch(decreaseItemCount(id));
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
