import globalStyles from "../styles/global.module.css";
import styles from "../styles/components/Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${globalStyles.container} ${styles.headerContainer}`}>
        <h1>Meals</h1>
        <CartButton cartItemsCount={2} />
      </div>
    </header>
  );
};

export default Header;
