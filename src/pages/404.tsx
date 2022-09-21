import type { NextPage } from "next";
import styles from "../styles/404.module.css";

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h5>ページがありません | 404 not found.</h5>
      </main>
    </div>
  );
};

export default Custom404;
