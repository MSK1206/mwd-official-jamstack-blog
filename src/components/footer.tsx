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
        ©2022 MSK1206.{" "}
        <span className={styles.logo}>
          <Image src="/mwd.svg" alt="mwd Logo" width={15} height={15} />
        </span>
      </a>
    </footer>
  );
}
