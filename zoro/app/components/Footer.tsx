"use client"

import React from 'react';
import Icon from './Icon'; // 確保路徑與你的 Navbar 相同

export default function Footer() {
  return (
      /* 頁尾 */
      <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
            <div className="md:w-1/3 text-left">
              <div className="flex items-center gap-2 mb-6">
                <img src="/zoro/imgs/kgif_logo.png" alt="KGIF Logo" className="h-8 w-auto grayscale opacity-70" />
                <h3 className="text-xl font-black italic">KGI <span className="text-green-600 text-left">ZORO</span></h3>
              </div>
              <p className="text-slate-600 font-bold mb-2 text-left">凱基期貨總公司 - 謝宗佑</p>
              <p className="text-slate-500 text-sm leading-relaxed text-left">
                台北市中正區重慶南路一段 2 號 13 樓<br />
                電話：02-2312-7127<br />
                114 年金管期總字第 004 號
              </p>
            </div>
            <div className="md:w-2/3 text-left">
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left">
                  {/* <h4 className="text-slate-800 font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2 text-left">
                    <Icon name="ShieldCheck" className="text-red-500 w-4 h-4" /> 期貨交易風險警語
                  </h4> */}
                  <h4 className="text-red-500 font-black text-sm mb-4 tracking-widest flex items-center gap-2">
                    <Icon name="ShieldCheck" className="w-5 h-5" /> 警語：交易者之戒
                  </h4>
                  <div className="text-[11px] text-slate-400 leading-relaxed space-y-2 text-left">
                    <p className="text-left">期貨交易具有低保證金之財務槓桿特性，可能產生極大損失，請投資人評估自身財務能力與經濟情況。<br />系統可能因網路或電力中斷等因素導致延遲，交易人應自行注意。</p>
                    <p className="font-bold text-slate-500 mt-2 text-left">凱基期貨許可證照字號：114 年金管期總字第 004 號</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-50 text-center text-slate-300 text-xs font-mono uppercase tracking-widest">
            © 2026 KGI Futures Tsung Yu Hsieh. All Rights Reserved.
          </div>
        </div>
      </footer>
  )
}