"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
// import Icon from "./Icon"; // 確保路徑與你的 Navbar 相同
import { MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const active = {
    url: "/zoro/imgs/active/Banner_營業員網站-1200x462.png",
    url2: "/zoro/imgs/active/阿姆斯a.jfif",
  };

  const slides = [
    {
      id: 1,
      url: active.url,
      alt: "KGI 活動：金馬奔騰",
      link: "https://event.kgi.com.tw/news/event/horse-wealth/?utm_source=website&utm_medium=banner&utm_campaign=2026cny",
    },
    {
      id: 2,
      url: active.url2,
      alt: "KGI 活動：阿姆斯賺",
      link: "https://event.kgi.com.tw/news/event/armstrong/index.html",
    },
  ];

  // 切換到下一張
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // 切換到前一張
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 自動播放
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isDragging]);

  // 處理拖曳開始
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  // 處理拖曳過程
  const handleMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  // 處理拖曳結束
  const handleEnd = () => {
    if (!isDragging) return;
    const threshold = 50; // 拖曳超過 50px 才切換
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6216425548378!2d121.51043307483258!3d25.04691113777249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90d237566d3%3A0x2f6bddb7fb6133c6!2zMTAw6Ie65YyX5biC5Lit5q2j5Y2A6YeN5oW25Y2X6Lev5LiA5q61MuiZn-iHuumWi-S_oeiol-Wkp-aokzEz5qiT!5e0!3m2!1szh-TW!2stw!4v1769761171590!5m2!1szh-TW!2stw";
  return (
    /* 頁尾 */
    // <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-left">
        <div className="max-w-6xl mx-auto p-4 py-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-green-600 pl-4">
            精選活動
          </h2>

          <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl bg-gray-100">
            {/* 投影片容器 */}
            <div
              ref={containerRef}
              className={`flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing`}
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                transition: isDragging ? "none" : "transform 500ms ease-out",
              }}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseMove={(e) => handleMove(e.clientX)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              onTouchEnd={handleEnd}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="relative w-full h-[250px] md:h-[400px] flex-shrink-0"
                  style={{ minWidth: "100%" }}
                >
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                    onClick={() =>
                      !isDragging && window.open(slide.link, "_blank")
                    }
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1640341719942-d69894e6375f?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                  {/* 文字 Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                    <p className="text-xl font-bold">{slide.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 左右切換按鈕 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* 分頁點指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-gray-500 text-sm">
            💡 提示：您可以向左右拖曳圖片來切換活動
          </p>
        </div>
        
        {/* 地圖區域 - 增加下方間距 */}
        <div className="mb-20">
          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[480px] group">
            {/* 外框裝飾 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-transparent rounded-[2.5rem] blur opacity-30"></div>

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-full grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-1000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KGI Futures Map Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="md:w-1/3 text-left">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/zoro/imgs/kgif_logo.png"
                alt="KGIF Logo"
                className="h-8 w-auto grayscale opacity-70"
              />
              <h3 className="text-xl font-black italic">
                KGI <span className="text-green-600 text-left">ZORO</span>
              </h3>
            </div>
            <p className="text-amber-600/90 border-amber-50 font-bold mb-2 text-left border-l-4 border-amber-500 pl-3">
              凱基期貨總公司 - 謝宗佑
            </p>

            <div className="space-y-1 mt-4">
              <p className="text-amber-600/90 border-amber-50 text-sm leading-relaxed text-left flex items-start gap-1">
                <span className="text-amber-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                台北市中正區重慶南路一段 2 號 13 樓（台開大樓）
              </p>
              <p className="text-amber-600/90 border-amber-50 text-sm leading-relaxed text-left flex items-center gap-1">
                <span className="text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z" />
                  </svg>
                </span>
                電話：02-2312-7127
              </p>
              <p className="text-amber-600/90 text-xs font-medium mt-3 pt-2 border-t border-amber-50">
                114 年金管期總字第 004 號
              </p>
            </div>
          </div>
          <div className="md:w-2/3 text-left">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left">
              {/* <h4 className="text-slate-800 font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2 text-left">
                    <ShieldCheck className="text-red-500 w-4 h-4" /> 期貨交易風險警語
                  </h4> */}
              <h4 className="text-red-500 font-black text-sm mb-4 tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> 警語：交易者之戒
              </h4>
              <div className="text-[11px] text-slate-400 leading-relaxed space-y-2 text-left">
                <p className="text-left">
                  期貨交易具有低保證金之財務槓桿特性，可能產生極大損失，請投資人評估自身財務能力與經濟情況。
                  <br />
                  系統可能因網路或電力中斷等因素導致延遲，交易人應自行注意。
                </p>
                <p className="font-bold text-slate-500 mt-2 text-left">
                  凱基期貨許可證照字號：114 年金管期總字第 004 號
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-50 text-center text-slate-300 text-xs font-mono uppercase tracking-widest">
          © 2026 KGI Futures Tsung Yu Hsieh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
