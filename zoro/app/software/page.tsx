import SoftWareClient from './SoftwareClient';

// 這段程式碼在伺服器跑，爬蟲抓到的就是這個標題
export const metadata = {
  title: '凱基軟體使用教學 | 謝宗佑手把手帶你完成',
  description: '只需準備雙證件與入金存摺，跟著凱基期貨謝宗佑的步驟，最快 10 分鐘完成期貨線上開戶。包含國內外期貨、選擇權權限申請流程。',
  keywords: ['凱基超級大三元', '凱基隨身e策略', '凱基隨身營業員', '凱基全球理財王', '期貨營業員推薦', '謝宗佑'],
};

export default function Page() {
  // 這裡可以先從資料庫或外部 API 抓資料，再傳給下面
  return <SoftWareClient />;
}