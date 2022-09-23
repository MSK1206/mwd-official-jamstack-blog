import type { NextPage } from "next";
import SeoHead from "@/components/seohead";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Social from "@/components/social";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle="About"
        siteTitle="Matsushita Web Design"
        pageDesc="Matsushita Web Design 概要"
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
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.myname}>Masaki Matsushita.</h1>
          <p>birth: 1989/12/06</p>
          <p className={styles.txtwrap}>Thank you for watching our site.</p>

          <h4 className={styles.skillsheet}>Skill Sheet</h4>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>HTML</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>CSS</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>javascript</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>React/Next</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>Vue/Nuxt</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>Python</h6>
            <progress id="Progress_Html" max="100" value="70">
              70%
            </progress>
          </div>
        </div>
        <Social />
      </main>
    </div>
  );
};

export default About;
