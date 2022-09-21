import type { NextPage } from "next";
import SeoHead from "@/components/seohead";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle="Home"
        siteTitle="Matsushita Web Design"
        pageDesc="Matsushita Web Design ホーム"
        og_type="website"
        imgUrl="/website.jpg"
      />
      <main className={styles.main}>
        <h1 className={styles.top}>
          <span className={styles.toptext}>N</span>ext.js&nbsp;+&nbsp;
          <span className={styles.toptext}>T</span>ypeScript
        </h1>
        <h6 className={styles.top}>microCMS Jamstack Blog</h6>
      </main>
    </div>
  );
};

export default Home;
