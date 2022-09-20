import type { NextPage } from "next";

const Thanks: NextPage = () => {
  return (
    <div className="container">
      <main className="main">
        <h1>送信が完了しました。</h1>
        <span>お問い合わせ頂きありがとうございます。</span>
        <span>
          ※ご返信に1~2日要する場合がございますのでご了承お願い致します。
        </span>
      </main>
    </div>
  );
};

export default Thanks;
