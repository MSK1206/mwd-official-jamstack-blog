import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/MSK1206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; 2022{" "}
        <span className={styles.default_credit}>
          &nbsp;Matsushita Web Design&nbsp;
        </span>
        <span className={styles.mobile_credit}>&nbsp;MWD&nbsp;</span> All Right
        Reserved.
      </a>
    </footer>
  );
}
