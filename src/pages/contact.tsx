import type { NextPage } from "next";
import SeoHead from "@/components/seohead";
import { useEffect } from "react";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  const FormrunID: string = `${process.env.NEXT_PUBLIC_FORMRUN_FORM_ID}`;
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const scriptUrl = document.createElement("script");
    scriptUrl.src = "https://sdk.form.run/js/v2/embed.js";
    head.appendChild(scriptUrl);
    return () => {
      head.removeChild(scriptUrl);
    };
  }, []);
  return (
    <div className={styles.container}>
      <SeoHead
        pageTitle="Contact"
        siteTitle="Demo Site"
        pageDesc="Nextjs + microCMS"
        og_type="website"
        imgUrl="/website.jpg"
      />
      <main className={styles.main}>
        <div className={styles.formrun_width}>
          <div
            className="formrun-embed"
            data-formrun-form={FormrunID}
            data-formrun-redirect="true"
          />
        </div>
      </main>
    </div>
  );
};

export default Contact;
