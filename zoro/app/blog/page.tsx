import BlogClient from './BlogClient';

// 這段程式碼在伺服器跑，爬蟲抓到的就是這個標題
export const metadata = {
  title: '凱基期貨謝宗佑營業員 | 期貨當沖交易心得與健身日記',
  description: '期貨當沖交易心得與健身日記。',
  keywords: ['凱基期貨選擇權教學', '期貨教學', '選擇權教學', '期貨當沖交易心得', '健身日記', '期貨營業員推薦', '謝宗佑'],
};

export default function Page() {
  // 這裡可以先從資料庫或外部 API 抓資料，再傳給下面
  return <BlogClient />;
}