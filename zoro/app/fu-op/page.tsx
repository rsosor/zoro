import FuOpClient from './FuOpClient';

// 這段程式碼在伺服器跑，爬蟲抓到的就是這個標題
export const metadata = {
  title: '凱基期貨選擇權線上教學 | 謝宗佑手把手帶你完成',
  description: '凱基期貨選擇權教學。',
  keywords: ['凱基期貨選擇權教學', '期貨教學', '選擇權教學', '選擇權時間價值', '期貨營業員推薦', '謝宗佑'],
};

export default function Page() {
  // 這裡可以先從資料庫或外部 API 抓資料，再傳給下面
  return <FuOpClient />;
}