"use client";

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function OpenAccountClient() {
//   const [step, setStep] = useState(1);

//   return (
//     <div className="min-h-screen bg-white py-20 px-4">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">凱基期貨線上開戶 - 完整流程</h1>

//         {/* 互動式步驟選單 */}
//         <div className="flex gap-4 mb-10">
//           {[1, 2, 3].map((s) => (
//             <button
//               key={s}
//               onClick={() => setStep(s)}
//               className={`px-6 py-2 rounded-full font-bold ${step === s ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-500'}`}
//             >
//               步驟 {s}
//             </button>
//           ))}
//         </div>

//         <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl">
//           {step === 1 && <p className="text-lg text-slate-700">準備文件：身分證正反面影本、第二證件、存摺...</p>}
//           {step === 2 && <p className="text-lg text-slate-700">下載「凱基隨身開戶」APP，並輸入推薦代號：XXXXX...</p>}
//           {step === 3 && <p className="text-lg text-slate-700">填寫基本資料，並等待宗佑與您聯繫核對身分...</p>}
//         </div>

//         <Link href="/" className="mt-10 inline-block text-green-600 font-bold">
//            ← 回到首頁
//         </Link>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  CheckCircle2,
  Monitor,
  FileText,
  UserCheck,
  ChevronRight,
  ArrowLeft,
  Info,
  ExternalLink,
  ShieldCheck,
  Image as ImageIcon,
  UserPlus,
  Search,
  Users,
  AlertCircle,
  X,
  Wallet,
} from "lucide-react";

export default function App() {
  const [step, setStep] = useState(1);

  const officialFlow = [
    { id: 1, label: "申辦資格確認" },
    { id: 2, label: "上傳相關證件" },
    { id: 3, label: "填寫個人資料" },
    { id: 4, label: "手持身分證上傳" },
    { id: 5, label: "開戶文件簽署" },
    { id: 6, label: "出入金銀行設定" },
  ];

  // 定義教學流程圖的圖片路徑陣列
  const tutorialImages = [
    {
      id: 1,
      src: "/zoro/imgs/teaching/open_account/1.png",
      alt: "步驟一：申辦資格認證",
    },
    // 如果有更多圖片，可以依照格式繼續增加，例如：
    {
      id: 2,
      src: "/zoro/imgs/teaching/open_account/2.png",
      alt: "步驟一：申辦資格認證",
    },
    {
      id: 3,
      src: "/zoro/imgs/teaching/open_account/3.png",
      alt: "步驟二：上傳相關證件",
    },
    {
      id: 4,
      src: "/zoro/imgs/teaching/open_account/4.png",
      alt: "步驟二：上傳相關證件",
    },
    {
      id: 5,
      src: "/zoro/imgs/teaching/open_account/5.png",
      alt: "步驟三：填寫個人資料",
    },
    {
      id: 6,
      src: "/zoro/imgs/teaching/open_account/6.png",
      alt: "步驟三：填寫個人資料",
    },
    {
      id: 7,
      src: "/zoro/imgs/teaching/open_account/7.png",
      alt: "步驟三：填寫個人資料",
    },
    {
      id: 8,
      src: "/zoro/imgs/teaching/open_account/8.png",
      alt: "步驟三：信箱啟動確認信",
    },
    {
      id: 9,
      src: "/zoro/imgs/teaching/open_account/9.png",
      alt: "步驟三：信箱認證成功",
    },
    {
      id: 10,
      src: "/zoro/imgs/teaching/open_account/10.png",
      alt: "步驟三：填寫個人資料",
    },
    {
      id: 11,
      src: "/zoro/imgs/teaching/open_account/11.png",
      alt: "步驟三：CSR 及 FATCA 自我申明表",
    },
    {
      id: 12,
      src: "/zoro/imgs/teaching/open_account/12.png",
      alt: "步驟三：申請布蘭特原油期貨交易功能及申請盤後交易功能",
    },
    {
      id: 13,
      src: "/zoro/imgs/teaching/open_account/13.png",
      alt: "步驟三：配合台灣期貨交易所推出盤後交易制度之公告事項",
    },
    {
      id: 14,
      src: "/zoro/imgs/teaching/open_account/14.png",
      alt: "步驟三：填寫個人資料",
    },
    {
      id: 15,
      src: "/zoro/imgs/teaching/open_account/15.png",
      alt: "步驟三：期貨交易知識認知確認表",
    },
    {
      id: 16,
      src: "/zoro/imgs/teaching/open_account/16.png",
      alt: "步驟四：手持身分證上傳",
    },
    {
      id: 17,
      src: "/zoro/imgs/teaching/open_account/17.png",
      alt: "步驟五：開戶文件簽署",
    },
    {
      id: 18,
      src: "/zoro/imgs/teaching/open_account/18.png",
      alt: "步驟五：簽署成功",
    },
    {
      id: 19,
      src: "/zoro/imgs/teaching/open_account/19.png",
      alt: "步驟六：出入金銀行帳戶設定",
    },
    { id: 20, src: "/zoro/imgs/teaching/open_account/20.png", alt: "預覽畫面" },
    { id: 21, src: "/zoro/imgs/teaching/open_account/21.png", alt: "預覽畫面" },
    {
      id: 22,
      src: "/zoro/imgs/teaching/open_account/22.png",
      alt: "預覽畫面(契約副本下載)",
    },
    {
      id: 23,
      src: "/zoro/imgs/teaching/open_account/23.png",
      alt: "契約副本輸入密碼",
    },
    { id: 24, src: "/zoro/imgs/teaching/open_account/24.png", alt: "契約副本" },
    {
      id: 25,
      src: "/zoro/imgs/teaching/open_account/25.png",
      alt: "開戶完成！",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "開戶前準備",
      description: "確認資格與應備文件",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-slate-800">
              第一步：確認申辦資格
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <p className="text-slate-600 text-sm font-bold">適合申請對象：</p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 h-full">
                {[
                  "限本國自然人且無授權交易者",
                  "年滿 20 歲未滿 70 歲，且無限制行為能力",
                  "僅為中華民國納稅義務人身分",
                  "需可手持身分證拍照，並通過系統認證",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-start text-xs text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-slate-600 text-sm font-bold">額度限制說明：</p>
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 space-y-2 h-full">
                <div className="flex gap-2 items-start text-xs text-amber-900 leading-relaxed">
                  <Wallet className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-600" />
                  <p>
                    採非當面方式開戶之帳戶，其非當面開戶交易額度採身分證(ID)總歸戶控管。
                  </p>
                </div>
                <div className="bg-white/60 p-2 rounded-lg text-[11px] text-amber-950 font-medium">
                  國內外委託帳戶盤中未沖銷部位及新增委託合計所需保證金不得超過{" "}
                  <span className="text-red-600 font-bold">100 萬元 (含)</span>
                  。
                </div>
                <p className="text-[10px] text-amber-700 italic">
                  ※ 如欲放寬保證金額度者，需本人臨櫃辦理或請洽所屬營業員。
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-sm">請準備好以下正本文件照片：</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "國民身分證正本",
              "第二身分證明文件 (駕照、健保卡等)",
              "約定出入金帳戶證明 (限本人帳戶且不可為聯名帳戶)",
              // "手寫簽名照片 (簽於白紙上)"
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "選擇開戶路徑",
      description: "根據您的身分選擇路徑",
      icon: <Monitor className="w-6 h-6" />,
      content: (
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-slate-800">
            第二步：進入線上系統
          </h3>
          <p className="text-slate-600">
            進入連結後，請根據您的狀態選擇對應按鈕：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 border border-slate-200 rounded-2xl text-center hover:border-green-500 transition-colors">
              <UserPlus className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-bold">新戶開戶</p>
              <p className="text-[10px] text-slate-400">尚未在凱基開戶者</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-2xl text-center hover:border-green-500 transition-colors">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-bold">已是本公司客戶</p>
              <p className="text-[10px] text-slate-400">已申請電子戶者</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-2xl text-center hover:border-green-500 transition-colors">
              <Search className="w-8 h-8 mx-auto mb-2 text-amber-500" />
              <p className="text-sm font-bold">進度或補件查詢</p>
              <p className="text-[10px] text-slate-400">查看審核狀態</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="text-[11px] text-blue-800 leading-relaxed">
              <span className="font-bold">＊小技巧：</span>
              若您已有凱基期貨帳號，選擇『已是本公司客戶』可減少基本資料登打時間，並開放自選開戶分公司。
            </p>
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm text-amber-900 font-bold">
                提醒：手持身分證上傳為關鍵環節，請確保內容清晰，避免退件。
              </p>
            </div>
          </div>
          {/* <div className="mt-8 bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-4">
            <p className="text-sm text-amber-900 leading-tight">
              <span className="font-bold">提醒：</span>{" "}
              手持身分證上傳為關鍵環節，請確保人臉與證件內容皆清晰可辨，避免退件。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  請手持身分證{" "}
                  <span className="text-slate-900 font-bold">正面</span>
                  ，置於臉部下方或側邊，避免遮擋五官。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  確保光線充足，但須注意身分證上的{" "}
                  <span className="text-slate-900 font-bold">反光</span>{" "}
                  是否遮蓋到文字。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  拍照時，相機請對焦在{" "}
                  <span className="text-slate-900 font-bold">身分證</span>{" "}
                  上，確保證件文字清楚可讀。
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="bg-slate-900 p-5 rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <p className="text-xs opacity-70">推薦代號 (必填)</p>
                <p className="text-xl font-black tracking-widest text-green-400">ZORO888</p>
              </div>
              <p className="text-[10px] opacity-60 text-right max-w-[120px]">
                填寫此代號，由宗佑為您提供後續專業服務
              </p>
            </div>
          </div> */}
        </div>
      ),
    },
    {
      id: 3,
      title: "完整 6 大流程",
      description: "填寫資料與身分核對",
      icon: <UserCheck className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800">
            最後：完成 6 大線上步驟
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {officialFlow.map((f) => (
              <div
                key={f.id}
                className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100"
              >
                <span className="w-5 h-5 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {f.id}
                </span>
                <span className="text-xs font-medium text-slate-700">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100">
            <div className="flex gap-2 items-center text-red-700 font-bold mb-1">
              <AlertCircle className="w-4 h-4" />
              <p className="text-sm">關於補件通知</p>
            </div>
            <p className="text-xs text-red-600 leading-relaxed">
              若因照片模糊或資料有誤導致「開戶失敗」，系統會自動傳送通知至您的{" "}
              <strong>Email</strong> 或 <strong>手機簡訊</strong>
              ，請點擊「進度或補件查詢」進行修正。
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-green-100/50 to-transparent -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <button className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">返回首頁</span>
        </button>

        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            凱基期貨 <span className="text-green-600">線上開戶教學</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl">
            參考下方流程引導，電腦、手機皆可輕鬆完成。如有補件需求，亦可隨時查詢進度。
          </p>
        </div>

        {/* 頂部進度條模擬 */}
        <div className="mb-12 hidden md:block">
          <div className="flex justify-between items-center relative">
            <div className="absolute h-0.5 bg-slate-200 left-0 right-0 top-1/2 -z-10" />
            {officialFlow.map((f) => (
              <div key={f.id} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                    f.id <= (step === 3 ? 6 : step * 2)
                      ? "bg-green-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {f.id}
                </div>
                <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`w-full flex items-center gap-4 p-5 rounded-3xl transition-all duration-300 text-left ${
                  step === s.id
                    ? "bg-white shadow-xl shadow-green-100 border-l-4 border-green-600 translate-x-2"
                    : "bg-transparent border-l-4 border-transparent hover:bg-white/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    step === s.id
                      ? "bg-green-600 text-white"
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {s.icon}
                </div>
                <div className="overflow-hidden">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider ${step === s.id ? "text-green-600" : "text-slate-400"}`}
                  >
                    PHASE 0{s.id}
                  </p>
                  <p
                    className={`font-bold truncate ${step === s.id ? "text-slate-800" : "text-slate-500"}`}
                  >
                    {s.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200 min-h-[500px] relative overflow-hidden flex flex-col justify-start">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 -z-0 opacity-50" />

              <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {steps.find((s) => s.id === step)?.content}

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  {step < 3 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="flex-1 bg-green-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-green-700 transition-all shadow-lg"
                    >
                      前往下一步：{steps[step].title}{" "}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <a
                      href="https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F"
                      target="_blank"
                      className="flex-1 bg-green-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-green-700 transition-all shadow-lg"
                    >
                      立即開啟線上開戶連結 <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-8 py-4 border border-slate-200 text-slate-500 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                    >
                      返回
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                <ImageIcon className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">手持身分證上傳提示</h2>
                <p className="text-slate-500 text-sm">截圖步驟 4 為關鍵環節，請確保人臉與證件內容皆清晰可辨。</p>
              </div>
            </div>
            <div className="flex gap-4">
               <button className="whitespace-nowrap bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all">
                預覽範例照片
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* 完整教學截圖展示區 */}
      <div className="space-y-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-black text-slate-900 text-center">
            完整線上開戶流程教學圖
          </h2>
        </div>

        <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-xl overflow-hidden p-4 md:p-8">
          <div className="space-y-8">
            {tutorialImages.map((image) => (
              <div
                key={image.id}
                className="bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden flex flex-col items-center justify-center min-h-[300px] relative"
              >
                {/* 💡 這裡就是處理「第16張圖片(index 15)後放入補充文字」的邏輯 */}
                {image.alt === "步驟四：手持身分證上傳" && (
                  <div className="bg-indigo-50 border-l-8 border-indigo-500 rounded-3xl p-8 my-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-indigo-500 p-2 rounded-xl">
                        <AlertCircle className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-indigo-900">
                        補充說明：
                      </h3>
                    </div>
                    <div className="text-indigo-800 leading-relaxed">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-amber-200/50 pt-4">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                            1
                          </div>
                          <p className="text-[14px] text-amber-900/80 leading-relaxed">
                            手持身分證
                            <span className="font-bold underline text-amber-900">
                              正面
                            </span>
                            ，置於臉部下方或側邊，避免遮擋五官。
                          </p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                            2
                          </div>
                          <p className="text-[14px] text-amber-900/80 leading-relaxed">
                            確保光線充足，但須注意身分證上的
                            <span className="font-bold underline text-amber-900">
                              反光
                            </span>
                            是否遮蓋到文字。
                          </p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                            3
                          </div>
                          <p className="text-[14px] text-amber-900/80 leading-relaxed">
                            拍照時，相機請對焦在
                            <span className="font-bold underline text-amber-900">
                              身分證
                            </span>
                            上，確保證件文字清晰可讀。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* 使用 map 渲染圖片 */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full md:max-w-4xl h-auto block shadow-md rounded-[2rem] mx-auto my-4"
                  onError={(e) => {
                    // 圖片載入失敗時隱藏圖片並顯示錯誤訊息
                    e.target.style.display = "none";
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = "block";
                  }}
                />

                {/* 備用顯示內容：只有在圖片載入失敗時會被上一段 JS 觸發顯示 */}
                <div className="hidden text-center py-20 space-y-4">
                  <ImageIcon className="w-20 h-20 text-slate-300 mx-auto" />
                  <p className="text-slate-500 font-bold text-xl">
                    圖片載入中或路徑需確認
                  </p>
                  <p className="text-slate-400 text-sm">
                    當前 ID: {image.id} | 路徑: {image.src}
                  </p>
                </div>

                {/* 裝飾性標籤 */}
                <div className="absolute top-6 left-6 bg-green-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg">
                  STEP {image.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>提示：</strong>{" "}
            若您在操作過程中遇到任何與截圖不符的情況，或是有任何補件疑問，請隨時聯繫營業員宗佑。
          </p>
        </div>
      </div>
    </div>
  );
}
