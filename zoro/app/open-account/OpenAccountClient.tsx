"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function OpenAccountClient() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">凱基期貨線上開戶 - 完整流程</h1>
        
        {/* 互動式步驟選單 */}
        <div className="flex gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <button 
              key={s}
              onClick={() => setStep(s)}
              className={`px-6 py-2 rounded-full font-bold ${step === s ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-500'}`}
            >
              步驟 {s}
            </button>
          ))}
        </div>

        <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl">
          {step === 1 && <p className="text-lg text-slate-700">準備文件：身分證正反面影本、第二證件、存摺...</p>}
          {step === 2 && <p className="text-lg text-slate-700">下載「凱基隨身開戶」APP，並輸入推薦代號：XXXXX...</p>}
          {step === 3 && <p className="text-lg text-slate-700">填寫基本資料，並等待宗佑與您聯繫核對身分...</p>}
        </div>

        <Link href="/" className="mt-10 inline-block text-green-600 font-bold">
           ← 回到首頁
        </Link>
      </div>
    </div>
  );
}