import OpenAccountClient from './OpenAccountClient';
import Navbar from '../components/Navbar';
// 這段程式碼在伺服器跑，爬蟲抓到的就是這個標題
export const metadata = {
  title: '凱基期貨線上開戶教學 | 謝宗佑手把手帶你完成',
  description: '只需準備雙證件與出入金存摺，跟著凱基期貨謝宗佑的步驟，最快 10 分鐘完成期貨線上開戶申請。包含國內外期貨、選擇權。',
  keywords: ['凱基期貨線上開戶', '凱基期貨開戶申請', '線上開戶教學', '期貨營業員推薦', '謝宗佑'],
};

export default function Page() {
  // 這裡可以先從資料庫或外部 API 抓資料，再傳給下面
  return <OpenAccountClient />;
}