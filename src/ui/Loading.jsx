import styles from "../styles/ui/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <img src="/images/loading.svg" alt="Loading" />
    </div>
  );
}

export default Loading;
