import globalStyles from "../styles/global.module.css";
import styles from "../styles/components/Header.module.css";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${globalStyles.container} ${styles.headerContainer}`}>
        <h1>ReactMeals</h1>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
