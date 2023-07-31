import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexBox}>
        <p>LexNote</p>

        </div>
      </div>
    </header>
  );
};
