import Head from "next/head";
import { NextPage } from "next";
import { Seo } from "@/types/seo";
import { useRouter } from "next/router";

const SeoHead: NextPage<Seo> = ({
  pageTitle,
  siteTitle,
  pageDesc,
  og_type,
  imgUrl,
}) => {
  const router = useRouter();
  const siteUrl: string = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const url = `${siteUrl}${router.asPath}`;
  const title = `${pageTitle} - ${siteTitle}`;
  const desc = pageDesc;
  const sitetype = og_type;
  const ogImg = imgUrl;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={sitetype} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={ogImg} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    </Head>
  );
};

export default SeoHead;
