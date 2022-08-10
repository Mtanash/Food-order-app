import { IoCart } from "react-icons/io5";
import styles from "../styles/components/CartIcon.module.css";

function CartIcon() {
  return (
    <button className={styles.cartIcon}>
      <IoCart className={styles.icon} />
      <span className={styles.cartLabel}>2</span>
    </button>
  );
}

export default CartIcon;
