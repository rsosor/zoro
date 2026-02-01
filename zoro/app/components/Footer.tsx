"use client";

import React from "react";
// import Icon from "./Icon"; // 確保路徑與你的 Navbar 相同
import { MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6216425548378!2d121.51043307483258!3d25.04691113777249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90d237566d3%3A0x2f6bddb7fb6133c6!2zMTAw6Ie65YyX5biC5Lit5q2j5Y2A6YeN5oW25Y2X6Lev5LiA5q61MuiZn-iHuumWi-S_oeiol-Wkp-aokzEz5qiT!5e0!3m2!1szh-TW!2stw!4v1769761171590!5m2!1szh-TW!2stw";
  return (
    /* 頁尾 */
    // <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-left">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            台北市中正區重慶南路一段 2 號 13 樓（台開大樓）
          </p>
          <p className="text-amber-600/90 border-amber-50 text-sm leading-relaxed text-left flex items-center gap-1">
            <span className="text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z"/></svg>
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
