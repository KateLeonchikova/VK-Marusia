import styles from "./Loader.module.scss";

export const Loader = () => (
  <div className={styles.loader__container}>
    <div className={styles.loader}>
      <div className={styles.loader__item}></div>
      <div className={styles.loader__item}></div>
      <div className={styles.loader__item}></div>
    </div>
  </div>
);
