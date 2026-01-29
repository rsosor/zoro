import HomeClient from './HomeClient';

// 這裡可以正常使用 metadata
export const metadata = {
  title: '凱基期貨營業員謝宗佑',
  description: '分享交易與健身，兩者都需要高度的自律，歡迎找我線上開戶喔，也有放公司活動與使用教學',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "謝宗佑",
    "jobTitle": "期貨營業員",
    "worksFor": {
      "@type": "Organization",
      "name": "凱基期貨"
    },
    "url": "你的網址"
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 把需要 Client 邏輯的部分放進來 */}
      <HomeClient />
    </main>
  );
}