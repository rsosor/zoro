"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MessageCircle, Menu, X, Megaphone, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentAnnounce, setCurrentAnnounce] = useState(0);
  const pathname = usePathname();

  // 活動看板內容
  // const announcements = [
  //   "🔥 凱基新戶限時優惠「阿姆斯賺」：新戶交易達成即送 500 元超商禮券！",
  //   "📢 本週五晚上 19:00：期貨基礎進階講座（線上直播）",
  //   "⚡ 近期大盤波動劇烈，請各位投資人注意保證金水位。",
  //   "📈 掌握最新三刀流策略，歡迎點擊左側聯絡方式諮詢。"
  // ];
  // 活動看板內容：新增了 url 欄位，可以直接導向活動頁面或 LINE
  const announcements = [
    {
      text: "🔥 凱基新戶限時優惠「阿姆斯賺」：新戶交易達成即送 500 元超商禮券！",
      url: "https://event.kgi.com.tw/news/event/armstrong/index.html", // 替換為實際活動網址
    },
    {
      text: "📢 本週五晚上 19:00：期貨基礎進階講座（線上直播）",
      url: "#", // 替換為講座報名連結
    },
    {
      text: "⚡ 近期大盤波動劇烈，請各位投資人注意保證金水位。",
      url: null, // 若無連結則設為 null
    },
    {
      text: "📢 開戶找凱基期貨營業員 謝宗佑，歡迎聯繫。",
      url: "https://lin.ee/i7koSZH",
    },
  ];

  // 跑馬燈計時器
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnounce((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleScroll = (e) => {
    // 檢查目前是否就在首頁
    if (pathname === "/") {
      const element = document.getElementById("systems");
      if (element) {
        e.preventDefault(); // 阻止 Link 的預設跳轉行為
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // 如果不在首頁，則不執行 e.preventDefault()，讓 Link 正常的導向 "/#systems"
  };

  // 外部連結設定
  const socialLinks = {
    openLineOAUrl: "https://lin.ee/i7koSZH",
  };

  return (
    /* 導覽列 */
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo 區塊 */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <img
                src="/zoro/imgs/kgif_logo.png"
                alt="KGIF Logo"
                className="h-12 w-auto object-contain scale-125 mr-2"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                }}
              />
            </Link>
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-black italic tracking-tighter leading-none">
                <span className="text-green-600">凱基期貨營業員·謝宗佑</span>
              </span>
              {/* <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Zoro</span> */}
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
            <Link
              href="/#"
              onClick={scrollToTop}
              className="hover:text-green-600 transition font-bold"
            >
              關於我
            </Link>
            <Link
              href="/open-account"
              className="hover:text-green-600 transition font-bold"
              //  className="hover:text-green-600 transition"
            >
              線上開戶教學
            </Link>
            <Link
              href="/fu-op"
              className="hover:text-green-600 transition font-bold"
              //  className="hover:text-green-600 transition"
            >
              期貨選擇權教學
            </Link>
            <Link
              href="/software"
              className="hover:text-green-600 transition font-bold"
              //  className="hover:text-green-600 transition"
            >
              凱基看盤下單軟體
            </Link>
            <Link
              href="/#systems"
              onClick={handleScroll}
              className="hover:text-green-600 transition font-bold"
            >
              進階
            </Link>
            {/* <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a> */}
            <button
              onClick={() => window.open(socialLinks.openLineOAUrl, "_blank")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-5 h-5" /> 聯繫宗佑
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* 頂部活動看板 */}
      <div
        className={`bg-slate-900 text-white py-2.5 px-4 overflow-hidden border-b border-emerald-500/30 sticky top-0 z-50 ${announcements[currentAnnounce].url ? "cursor-pointer hover:bg-slate-800 transition-colors" : ""}`}
        onClick={() => {
          const url = announcements[currentAnnounce].url;
          if (url) window.open(url, "_blank");
        }}
      >
        <div className="max-w-[1300px] mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 border border-emerald-500/30">
            <Megaphone size={12} />
            Notice
          </div>
          <p className="text-xs font-bold tracking-wide italic truncate">
            {announcements[currentAnnounce].text}
          </p>
          {announcements[currentAnnounce].url && (
            <ExternalLink size={12} className="text-emerald-500 animate-pulse" />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 text-left">
          <Link
            href="/#"
            onClick={scrollToTop}
            className="hover:text-green-600 transition font-bold"
          >
            關於我
          </Link>
          <Link
            href="/open-account"
            className="hover:text-green-600 transition font-bold"
            //  className="hover:text-green-600 transition"
          >
            線上開戶教學
          </Link>
          <Link
            href="/fu-op"
            className="hover:text-green-600 transition font-bold"
            //  className="hover:text-green-600 transition"
          >
            期貨選擇權教學
          </Link>
          <Link
            href="/software"
            className="hover:text-green-600 transition font-bold"
            //  className="hover:text-green-600 transition"
          >
            凱基看盤下單軟體
          </Link>
          <Link
            href="/#systems"
            onClick={handleScroll}
            className="hover:text-green-600 transition font-bold"
          >
            進階
          </Link>
          <button
            onClick={() => window.open(socialLinks.openLineOAUrl, "_blank")}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> 聯繫宗佑
          </button>
        </div>
      )}
    </nav>
  );
}
