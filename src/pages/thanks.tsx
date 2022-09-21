import type { NextPage } from "next";
import styles from "../styles/thanks.module.css";

const Thanks: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>送信が完了しました。</h1>
      </main>
    </div>
  );
};

export default Thanks;
