import NextDocument, { Head, Html, Main, NextScript } from "next/document";

interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja" prefix="og: https://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
