import type { NextPage } from "next";
import SeoHead from "@/components/seohead";
import styles from "../styles/Works.module.css";

const Works: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle="Works"
        siteTitle="Matsushita Web Design"
        pageDesc="Matsushita Web Design 制作実績"
        og_type="website"
        imgUrl="/website.jpg"
      />
      <main className={styles.main}>
        <h1 className={styles.top}>Works Page.</h1>
      </main>
    </div>
  );
};

export default Works;
