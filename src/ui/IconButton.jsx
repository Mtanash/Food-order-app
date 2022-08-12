import styles from "../styles/ui/IconButton.module.css";

function IconButton({ Icon, label, onClick }) {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <Icon />
      {label}
    </button>
  );
}

export default IconButton;
