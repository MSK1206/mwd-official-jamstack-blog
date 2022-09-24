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
            <div className="progress w-100 mt-1 mb-3">
              <div className="progress-bar col-6 bg-danger" role="progressbar">
                50%
              </div>
            </div>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>CSS</h6>
            <div className="progress w-100 mt-1 mb-3">
              <div className="progress-bar col-6" role="progressbar">
                50%
              </div>
            </div>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>javascript</h6>
            <div className="progress w-100 mt-1 mb-3">
              <div className="progress-bar col-6 bg-warning" role="progressbar">
                50%
              </div>
            </div>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>React/Next</h6>
            <div className="progress w-100 mt-1 mb-3">
              <div className="progress-bar col-9 bg-black" role="progressbar">
                75%
              </div>
            </div>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>Vue/Nuxt</h6>
            <div className="progress w-100 mt-1 mb-3">
              <div className="progress-bar col-7 bg-success" role="progressbar">
                60%
              </div>
            </div>
          </div>
          <div className={styles.skillbar}>
            <h6 className={styles.skillnamebar}>Python</h6>
            <div className="progress w-100 mt-1 mb-3">
              <div
                className="progress-bar col-4 progress-bar-striped"
                role="progressbar"
              >
                30%
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Social />
      </main>
    </div>
  );
};

export default About;
