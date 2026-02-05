"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MessageCircle,
  Menu,
  X,
  Megaphone,
  ExternalLink,
  ChevronDown,
  Code,
  LineChart,
  BookOpen,
  ArrowRight,
  MonitorDot, // 看盤監控
  Zap,        // 閃電下單
  BarChart3,  // 技術分析
  Smartphone,  // 行動下單
  MousePointerClick // 一鍵下單
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentAnnounce, setCurrentAnnounce] = useState(0);
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    // {
    //   text: "📢 本週五晚上 19:00：期貨基礎進階講座（線上直播）",
    //   url: "#", // 替換為講座報名連結
    // },
    {
      text: "⚡ 近期大盤波動劇烈，請各位投資人注意保證金水位。",
      url: null, // 若無連結則設為 null
    },
    {
      text: "📢 開戶找凱基期貨營業員 謝宗佑，歡迎聯繫。",
      url: "https://lin.ee/i7koSZH",
    },
  ];

  const advantages = [
    {
      name: "凱基 MultiCharts（敬請期待）",
      desc: "專業回測功能與易上手策略開發",
      icon: <LineChart className="w-5 h-5 text-purple-500" />,
      path: "/mcs",
    },
    {
      name: "凱基 API 串接（敬請期待）",
      desc: "專為程式交易者打造，極低延遲",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      path: "/api",
    },
    // {
    //   name: "開發看盤下單系統（敬請期待）",
    //   desc: "根據需要，建立屬於自己的看盤下單系統",
    //   icon: <MonitorDot className="w-5 h-5 text-blue-500" />,
    //   path: "/custom_app",
    // },
    {
      name: "交易心得 & 健力日記",
      desc: "交易與健身都需要極其強大的自律...記錄並分享我的心得。",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      path: "/blog",
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
      {/* 頂部活動看板 */}
      <div
        className={`bg-slate-900 text-white py-2.5 px-4 overflow-hidden border-b border-emerald-500/30 sticky top-0 z-50 ${announcements[currentAnnounce].url ? "cursor-pointer hover:bg-slate-800 transition-colors" : ""}`}
        onClick={() => {
          const url = announcements[currentAnnounce].url;
          if (url) window.open(url, "_blank");
        }}
      >
        <div className="justify-center max-w-[1300px] mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter shrink-0 border border-emerald-500/30">
            <Megaphone size={12} />
            Notice
          </div>
          <p className="text-xs font-bold tracking-wide italic truncate">
            {announcements[currentAnnounce].text}
          </p>
          {announcements[currentAnnounce].url && (
            <ExternalLink
              size={12}
              className="text-emerald-500 animate-pulse"
            />
          )}
        </div>      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo 區塊 */}
          <div className="flex items-center gap-3">
            {/* <Link href="/">
              <img
                src="/zoro/imgs/kgif_logo.png"
                alt="KGIF Logo"
                className="h-12 w-auto object-contain scale-125 mr-2"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                }}
              />
            </Link> */}
            <Link href="/" className="flex flex-col">
              <span className="text-[40px] text-xl font-black italic tracking-tighter leading-none">
                <span className="text-green-600">謝宗佑</span>
                <span className="text-green-600"> - </span>
                <span className="text-green-600">凱基期貨</span>
              </span>
              {/* <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Zoro</span> */}
            </Link>
          </div>

          <div className="hidden xl:flex space-x-8 items-center font-medium text-slate-600">
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
            {/* <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a> */}

            {/* 進階選單 (Dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                className={`flex items-center gap-1 transition font-bold text-sm py-8 ${isDropdownOpen ? "text-green-600" : "hover:text-green-600"}`}
                href="/#systems"
                onClick={handleScroll}
              >
                進階者之路{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {/* 下拉內容 */}
              {isDropdownOpen && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-1">
                    專業交易工具與經驗
                  </div>
                  {advantages.map((adv) => (
                    <Link
                      key={adv.name}
                      href={adv.path}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="p-2 bg-white rounded-md shadow-sm border border-slate-50 group-hover/item:shadow-md transition-shadow">
                        {adv.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-800">
                          {adv.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {adv.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-green-500" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => window.open(socialLinks.openLineOAUrl, "_blank")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-5 h-5" /> 聯繫我
            </button>
          </div>

          {/* <div className="xl:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div> */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-slate-600 relative w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full transition-all active:scale-90"
            >
              <div className="flex flex-col items-end gap-[5px]">
                {/* 第一條線 */}
                <span
                  className={`h-[3px] bg-slate-800 rounded-full transition-all duration-300 transform origin-right ${isMenuOpen ? "-rotate-45 w-[26px] translate-y-[2px]" : "w-6"}`}
                ></span>
                {/* 第二條線 - 縮短增加設計感 */}
                <span
                  className={`h-[3px] bg-green-600 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "w-4"}`}
                ></span>
                {/* 第三條線 */}
                <span
                  className={`h-[3px] bg-slate-800 rounded-full transition-all duration-300 transform origin-right ${isMenuOpen ? "rotate-45 w-[26px] -translate-y-[2px]" : "w-6"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 手機版選單 */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 p-6 space-y-6 animate-in slide-in-from-right duration-300">
          <div className="grid gap-4">
            <Link
              href="/open-account"
              className="text-lg font-bold text-slate-800 border-l-4 border-transparent hover:border-green-500 pl-3"
            >
              線上開戶教學
            </Link>
            <Link
              href="/fu-op"
              className="text-lg font-bold text-slate-800 border-l-4 border-transparent hover:border-green-500 pl-3"
            >
              期貨選擇權教學
            </Link>
            <Link
              href="/software"
              className="text-lg font-bold text-slate-800 border-l-4 border-transparent hover:border-green-500 pl-3"
            >
              凱基下單軟體
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4 pl-3">
              進階者之路
            </p>
            <div className="grid gap-3">
              {advantages.map((adv) => (
                <Link
                  key={adv.name}
                  href={adv.path}
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl"
                >
                  {adv.icon}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-700">
                      {adv.name}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {adv.desc}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.open("https://lin.ee/i7koSZH", "_blank")}
            className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-green-100"
          >
            <MessageCircle className="w-5 h-5" /> 立即聯繫宗佑
          </button>
        </div>
      )}

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
            進階者之路
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
