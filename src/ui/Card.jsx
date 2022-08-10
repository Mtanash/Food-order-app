import styles from "../styles/ui/Card.module.css";

function Card({ children, className }) {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
}

export default Card;
