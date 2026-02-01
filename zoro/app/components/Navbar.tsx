"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    target.style.display = 'none';
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
              <Link href="/#" className="hover:text-green-600 transition font-bold">關於我</Link>
              <Link 
                href="/open-account" 
                className="hover:text-green-600 transition font-bold"
                //  className="hover:text-green-600 transition"
              >
                線上開戶教學
              </Link>
              <Link href="/#systems" className="hover:text-green-600 transition font-bold">關注</Link>
              <a href="#" className="hover:text-green-600 transition font-bold">凱基期貨選擇權教學</a>
              {/* <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a> */}
              <button 
                onClick={() => window.open(socialLinks.openLineOAUrl, '_blank')}
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

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 text-left">
            <a href="#" className="hover:text-green-600 transition font-bold">關於我</a>
            <a href="#" className="hover:text-green-600 transition font-bold">線上開戶教學</a>
            <a href="#systems" className="hover:text-green-600 transition font-bold">凱基軟體</a>
            <a href="#about" className="hover:text-green-600 transition font-bold">凱基期貨選擇權教學</a>            {/* <a href="#experience" className="block font-medium py-2 text-left">實戰經歷</a> */}
            <button 
              onClick={() => window.open(socialLinks.openLineOAUrl, '_blank')}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5"/> 聯繫宗佑
            </button>
          </div>
        )}
      </nav>
  );
}