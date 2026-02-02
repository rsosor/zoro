"use client"

import React, { useState, useEffect } from "react";
import { Menu, Phone, UserPlus, ChevronUp } from "lucide-react";

/**
 * 定義 LocalIcon 的 Props 型別
 */
interface LocalIconProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * 圖片圖標組件
 * 確保 img 標籤正確讀取 src，並加入預防性樣式
 */
const LocalIcon: React.FC<LocalIconProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`${className} flex items-center justify-center overflow-hidden`}>
      {src && !error ? (
        <img 
          src={src} 
          alt={alt || "icon"} 
          className="w-full h-full object-contain block"
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            console.error(`圖片載入失敗: ${src}`);
            setError(true);
          }}
        />
      ) : (
        /* 圖片失效時的後備顯示，方便排查問題 */
        <div className="w-full h-full bg-black/10 rounded-sm flex items-center justify-center text-[8px] text-white">
          無圖
        </div>
      )}
    </div>
  );
};

// --- 組件: 固定在側邊的開戶按鈕 ---
const FloatingActionButton = () => {
  const [showFloatingQR, setShowFloatingQR] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingQR(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const spec = false;

  const contactInfo = {
    // 你的開戶網址
    openAccountUrl:
      "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F",
    // 營業員電話號碼 (請替換為實際號碼)
    salesPhone: "0933929298",
    salesName: "專屬營業員",
    openLineOAUrl: "https://lin.ee/i7koSZH",
    openIGUrl: "https://www.instagram.com/trader.0222",
    openThreadsUrl: "https://www.threads.com/@trader.0222",
    // openYTUrl: "https://www.youtube.com",
    github: "https://github.com/rsosor",
    leetcode: "https://leetcode.com/u/rsosor/",
    // 定義所有本地圖片路徑
    icons: {
      line: "/zoro/imgs/icons/icons8-line-48.png",
      instagram: "/zoro/imgs/icons/icons8-instagram-48.png",
      threads: "/zoro/imgs/icons/icons8-threads-50.png",
      youtube: "zoro/imgs/icons/icons8-youtube-48.png",
      github: "/zoro/imgs/icons/icons8-github-48.png",
      leetcode: "/zoro/imgs/icons/icons8-leetcode-48.png",
      
    },
    icons2: {
      line: "/zoro/imgs/icons/icons8-line-64.png",
      instagram: "/zoro/imgs/icons/icons8-instagram-64.png",
      threads: "/zoro/imgs/icons/icons8-threads-64.png",
      youtube: "zoro/imgs/icons/icons8-youtube-squared-50.png",
      github: "/zoro/imgs/icons/icons8-github-50.png",
    }
  };

  return (
    <div className="fixed right-6 bottom-10 z-[200] flex flex-col items-end">
      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 items-start">
        {/* LINE 諮詢區塊 - 左側懸浮展開邏輯 */}
        <div className={`transition-all duration-500 transform ${showFloatingQR ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="hidden xl:flex group relative flex items-center">
            {/* 觸發圖標 (露出在邊緣的按鈕) */}
            <div className="w-12 h-12 bg-[#00B900] text-white rounded-r-xl shadow-lg flex items-center justify-center z-20 border-r-2 border-white/20 cursor-pointer">
              <Menu className="w-6 h-6" />
            </div>

            {/* 展開區域 - 靠近左側後平滑展開 */}
            <div className="bg-white p-4 rounded-r-3xl shadow-2xl border-2 border-l-0 border-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col items-center gap-2 min-w-[140px] z-0">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/zoro/imgs/M_502ysqhc_GW.png"
                  alt="凱基期貨線上開戶 QR Code"
                  className="w-32 h-32"
                />
                <span className="text-[10px] font-black text-slate-800">
                  掃描加 LINE
                </span>
                <span className="bg-red-500 text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse font-bold">
                  優惠諮詢
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- 撥打電話按鈕 --- */}
      <div className="flex flex-col items-end group">
        <div className="mb-2 px-3 py-1 bg-white text-blue-700 text-xs font-bold rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          聯繫營業員
        </div>
        <a
          href={`tel:${contactInfo.salesPhone}`}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:bg-blue-500 hover:scale-110 transition-all duration-300"
        >
          <Phone className="w-8 h-8" />
        </a>
        <div className="mt-2 text-[10px] text-blue-500 font-black tracking-widest uppercase bg-[#0b121e]/80 backdrop-blur-sm px-2 py-1 rounded border border-blue-500/20">
          📞立即撥號
        </div>
      </div>

      <div className="flex flex-col items-end group">
        <div className="mb-2 px-3 py-1 bg-white text-green-700 text-xs font-bold rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
          開戶享優惠
        </div>
        <a
          href={contactInfo.openAccountUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(22,163,74,0.6)] hover:bg-green-500 hover:scale-110 transition-all duration-300 animate-pulse-subtle"
        >
          <UserPlus className="w-8 h-8" />
        </a>
        <div className="mt-2 text-[10px] text-green-500 font-black tracking-widest uppercase bg-[#0b121e]/80 backdrop-blur-sm px-2 py-1 rounded border border-green-500/20">
          立即線上開戶
        </div>
      </div>

      <div className=" bg-slate-50 font-sans text-slate-900 selection:bg-green-200">
        {/* ==========================================================
            右側懸浮社群媒體欄 (Social Media Floating Bar)
            ========================================================== */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4">
          {/* LINE 按鈕 */}
          <a
            href={contactInfo.openLineOAUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 text-white rounded-full flex items-center justify-center hover:scale-110 hover:-translate-x-1 transition-all duration-300 group relative"
          >
            <LocalIcon src={spec ? contactInfo.icons2.line : contactInfo.icons.line} alt="Line" className="w-full h-full" />
            <span className="absolute right-14 bg-green-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              加 LINE 諮詢
            </span>
          </a>

          {/* IG 按鈕 */}
          <a
            href={contactInfo.openIGUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 text-pink-600 rounded-full flex items-center justify-center hover:scale-110 hover:-translate-x-1 transition-all duration-300 group relative"
          >
            <LocalIcon src={contactInfo.icons.instagram} alt="Instagram" className="w-full h-full" />
            <span className="absolute right-14 bg-pink-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              追蹤 Instagram
            </span>
          </a>

          {/* Threads 按鈕 */}
          <a
            href={contactInfo.openThreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 text-white rounded-full flex items-center justify-center hover:scale-110 hover:-translate-x-1 transition-all duration-300 group relative"
          >
            <LocalIcon src={contactInfo.icons2.threads} alt="Threads" className="w-full h-full" />
            <span className="absolute right-14 bg-slate-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              追蹤 Threads
            </span>
          </a>

          {/* YouTube 按鈕 */}
          {/* <a
            href={contactInfo.openYTUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 text-white rounded-full flex items-center justify-center hover:scale-110 hover:-translate-x-1 transition-all duration-300 group relative"
          >
            <LocalIcon src={contactInfo.icons.youtube} alt="YouTube" className="w-full h-full" />
            <span className="absolute right-14 bg-red-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
              前往 YouTube
            </span>
          </a> */}
        </div>
      </div>

      {/* 調整後的回到頂端按鈕：位置提高並改為半透明 */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-16 right-24 md:right-32 z-50 p-3 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-500 rounded-full shadow-xl transition-all duration-500 hover:-translate-y-1 hover:text-green-600 hover:border-green-200 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingActionButton;
