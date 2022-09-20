import SeoHead from "@/components/seohead";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle="About"
        tempTitle="Demo Site"
        pageDesc="Nextjs + microCMS"
        og_type="website"
        imgUrl="/website.jpg"
      />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.myimage}>
            <Image
              src="/mwd.svg"
              width={150}
              height={150}
              className={styles.myphoto}
              alt="My Image"
            />
          </div>
          <div className={styles.centerall}>
            <h1 className={styles.myname}>Masaki Matsushita.</h1>
            <p>birth: 1989/12/06</p>
            <p className={styles.txtwrap}>
              Thank you for watching our site. I am a freelance web designer in
              Osaka.
            </p>
            <a
              href="https://github.com/MSK1206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi-github github-icon-size"></i>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
