"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Dumbbell,
  Cpu,
  ChevronRight,
  RotateCcw,
  Terminal,
  Code,
  ExternalLink,
  BarChart3,
  Github,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 外部連結設定
  const socialLinks = {
    openAccountUrl:
      "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F",
    openLineOAUrl: "https://lin.ee/i7koSZH",
    openIGUrl: "https://www.instagram.com/trader.0222",
    openThreadsUrl: "https://www.threads.com/@trader.0222",
    github: "https://github.com/rsosor",
    leetcode: "https://leetcode.com/u/rsosor/",
  };

  const zoroQuotes = [
    "「在此刻做出選擇吧。是相信自己，還是相信我們這群人？但我一直以來都無從得知結果，無論你選擇哪一個。——《進擊的巨人》里維·阿卡曼」",
    "「如果你不戰鬥，就贏不了。——《進擊的巨人》艾連·葉格」",
    "「不經歷痛苦，就無法學到任何教訓。因為如果不犧牲什麼，人就什麼也得不到。——《鋼之鍊金術師》愛德華·艾力克」",
    "「冷靜下來，這就是所謂的『生存』。雖然很難，但如果不能保持理性，就會輸給本能。——《咒術迴戰》七海建人（一級術師，同時也是前上班族/交易員）」",
    "「災難總是接踵而至，這正是世間的常態。」",
    "「教練，我想贏錢...」——《灌籃高手》三井壽」",
    "「我是三井，一個永不放棄的人」——《灌籃高手》三井壽」",
    "「現在放棄，比賽就結束了！——《灌籃高手》安西教練」",
    "「如果我就死在這裡，那說明我不過是這種程度的男人。——《海賊王》羅羅亞索隆」",
    "「受盡苦難而不厭，此乃修羅之道。——《海賊王》羅羅亞索隆」",
  ];

  const advantages = [
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "三刀流般的執行力",
      description:
        "「傷痕是男兒的勳章」。在震盪的市場中，我以最剛猛的自律與速度，為您斬開獲利的道路。",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-green-500" />,
      title: "健力者的嚴格自律",
      description:
        "交易如健身，沒有捷徑。數年盯盤資歷，靠的是極致的自律，我深信「受盡苦難而不厭」，才是通往極致的唯一路徑。",
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: "最強大的名刀系統",
      description:
        "從看盤軟體到 MultiCharts 策略研發或 API 串接自研看盤系統，為高階交易者提供最強火力支撐，助您在市場中游刃有餘。",
    },
  ];

  const advantages2 = [
    {
      name: "MultiCharts 策略對接（敬請期待）",
      detail: "專業回測與自動執行方案",
      path: `/mcs`,
    },
    {
      name: "進階 API 串接服務（敬請期待）",
      detail: "專為程式交易者打造，極低延遲",
      path: `/api`,
    },
    {
      name: "開發看盤下單系統（敬請期待）",
      detail: "根據需要，建立屬於自己的看盤下單系統",
      path: `/custom_app`,
    },
    { name: "Day Trade 當沖實戰心得", detail: "分享數年盯盤實戰心法", path: `/blog` },
    { name: "健力日記", detail: "從運動認識自己的身體", path: `/blog` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="min-h-screen bg-[#0b121e] font-sans">
        {/* Hero 區塊 */}
        <section
          id="about"
          className="relative bg-[#0b121e] text-white py-24 overflow-hidden text-left"
        >
          {/* 背景環境裝飾 (Radial Gradient) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#16a34a_0%,transparent_50%)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* 左側文字內容 */}
            <div className="flex-1 text-left lg:pr-12">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/30 mb-6 tracking-widest uppercase">
                KGI Futures / 凱基期貨總公司
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-left">
                受盡苦難而不厭
                <br />
                <span className="text-green-500 italic text-left">
                  此乃修羅之道
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-xl font-light leading-relaxed text-left">
                從學生遊玩電競遊戲比賽的指尖反應，到健力訓練的鋼鐵意志。
                <br />
                在期貨戰場盯盤數年，我只相信：
                <br />
                <span className="text-green-400 font-medium">
                  唯有極致的自律，才能帶來純粹的盈利。
                </span>
              </p>

              <div className="flex flex-wrap gap-4 text-left">
                <a
                  href={socialLinks.openAccountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-bounce bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-black text-xl shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition cursor-pointer flex items-center gap-3 no-underline"
                >
                  立即線上開戶 <ChevronRight className="w-6 h-6" />
                </a>
                <a
                  href="#contact"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold text-xl backdrop-blur-sm transition cursor-pointer flex items-center justify-center"
                >
                  手續費優惠洽詢
                </a>
              </div>
            </div>

            {/* 右側個人照區塊 - 具備 3D 翻轉功能 */}
            <div className="md:w-2/5 flex justify-center relative perspective-1000">
              <div
                className={`relative w-80 h-[28rem] cursor-pointer transition-all duration-700 preserve-3d group ${isFlipped ? "rotate-y-180" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* 提示點擊的小標籤 (只在未翻轉時顯示) */}
                {!isFlipped && (
                  <div className="absolute -top-4 -left-4 z-30 bg-white text-green-600 px-3 py-1 rounded-full text-xs font-black shadow-lg animate-bounce flex items-center gap-1 border-2 border-green-500">
                    <RotateCcw className="w-3 h-3" />
                    點擊了解 CLICK TO FLIP
                  </div>
                )}

                {/* 正面: 照片面 */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="absolute -inset-4 bg-green-500/20 rounded-[2rem] blur-2xl group-hover:bg-green-500/30 transition duration-500"></div>
                  <div className="relative h-full bg-[#0b121e] rounded-[2rem] border-2 border-green-500/50 overflow-hidden shadow-2xl transition duration-500 group-hover:border-green-400 group-hover:scale-[1.02]">
                    <img
                      src="/zoro/imgs/zoro.jpg"
                      alt="謝宗佑 個人照"
                      className="w-full h-full object-contain transition duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-[#0b121e] to-transparent">
                      <span className="text-green-500 block mb-1 font-mono text-xs tracking-[0.3em]">
                        ZORO STYLE
                      </span>
                      <h2 className="text-3xl font-black tracking-widest mb-2 text-white text-center">
                        謝宗佑
                      </h2>
                      <div className="h-1 w-10 bg-green-500 mx-auto mb-4"></div>
                      <p className="text-slate-300 text-sm font-bold text-center">
                        數年盯盤經驗 ∪ 程式開發經驗
                      </p>
                      <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-tighter text-center text-center">
                        Day Trader / Powerlifter / Developer
                      </p>
                    </div>
                  </div>
                  {/* 裝飾語句標籤 */}
                  <div className="absolute -bottom-6 -right-6 bg-green-600 p-4 rounded-lg shadow-xl transform rotate-3 z-20 group-hover:rotate-0 transition-transform">
                    <p className="font-black italic text-white text-center">
                      {"既然要戰，就要贏！"}
                    </p>
                  </div>
                </div>

                {/* 反面: 詳細資訊面 (技術棧與經驗版面) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="absolute -top-4 -left-4 z-30 bg-white text-green-600 px-3 py-1 rounded-full text-xs font-black shadow-lg animate-bounce flex items-center gap-1 border-2 border-green-500">
                    <RotateCcw className="w-3 h-3" />
                    點擊翻閱 CLICK TO FLIP
                  </div>
                  <div className="h-full bg-slate-900 rounded-[2rem] border-2 border-green-400 p-6 flex flex-col shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 opacity-5">
                      <Terminal className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="inline-flex p-2 bg-green-500/10 rounded-lg mb-2">
                          <Code className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-xl font-black text-white tracking-widest uppercase text-center">
                          About Me
                        </h3>
                        <div className="h-0.5 w-8 bg-green-500 mx-auto mt-2"></div>
                      </div>

                      <div className="space-y-5 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                        {/* GitHub & LeetCode 連結區塊 */}
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // 防止點擊連結導致卡片翻轉
                            className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-green-500/20 hover:border-green-500/50 transition-all group/item no-underline block"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <Github className="w-4 h-4 text-slate-400 group-hover/item:text-white" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover/item:text-slate-300">
                                  Github
                                </span>
                              </div>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs font-mono text-green-400">
                              開發者開源平台
                            </p>
                          </a>

                          <a
                            href={socialLinks.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // 防止點擊連結導致卡片翻轉
                            className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-orange-500/20 hover:border-orange-500/50 transition-all group/item no-underline block"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                {/* <div className="w-4 h-4 rounded-sm bg-orange-500/20 flex items-center justify-center">
                                  <span className="text-[8px] text-orange-400 font-bold">LC</span>
                                </div> */}
                                <img
                                  src="/zoro/imgs/icons/icons8-leetcode-48.png"
                                  className="w-4 h-4 grayscale group-hover/item:grayscale-0"
                                  alt="LeetCode"
                                />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter group-hover/item:text-slate-300">
                                  LeetCode
                                </span>
                              </div>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs font-mono text-orange-400">
                              開發者刷題平台
                            </p>
                          </a>
                        </div>

                        {/* 程式經驗 */}
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] px-1">
                            開發（Development）
                          </h4>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-left">
                            <p className="text-xs text-slate-300 leading-relaxed">
                              助您在程式交易之中一臂之力。
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {"\u2713"} 系統前後端開發經驗
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {"\u2713"} 串接報價、下單 API 經驗
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {"\u2713"} 資料結構、演算法刷題訓練
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {"\u2713"} 操作系統、系統設計思維
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-slate-500">
                                API Design
                              </span>
                              <span className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-slate-500">
                                SQL
                              </span>
                              <span className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-slate-500">
                                C++/C/Java/C#/JavaScript
                              </span>
                              <span className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-slate-500">
                                Data Structure
                              </span>
                              <span className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-slate-500">
                                Algorithm
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 交易經驗 */}
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] px-1">
                            交易（Trade）
                          </h4>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-left">
                            <p className="text-xs text-slate-300 leading-relaxed">
                              多年的盯盤經驗，親身經歷過多/空頭當下氛圍、交易走勢、分時明細，懂得細水長流、遠離黑天鵝才是最終贏家。
                            </p>
                          </div>
                        </div>

                        {/* 名片 */}
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] px-1">
                            名片（business card）
                          </h4>
                          <div className="group relative overflow-hidden rounded-xl border border-white/10">
                            <img
                              src="/zoro/imgs/business_card.jpg"
                              alt="Business Card"
                              className="w-full h-auto transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D 動畫必要的 CSS */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `,
            }}
          />
        </section>
      </div>

      {/* 動態語錄跑馬燈 */}
      <div className="bg-green-600 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12">
          {[...zoroQuotes, ...zoroQuotes].map((quote, i) => (
            <span
              key={i}
              className="text-white font-black italic text-lg opacity-90 uppercase"
            >
              {quote} <span className="mx-8 text-green-300">•</span>
            </span>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `,
        }}
      />

      {/* 核心優勢 */}
      <section
        id="numberone"
        className="py-24 max-w-7xl mx-auto px-4 text-left"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            世界第一的野心
          </h2>
          <p className="text-slate-500 font-light">
            「我要成為世界第一的期貨營業員，讓我的名聲響徹雲霄！」
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-10 rounded-2xl shadow-sm border-b-4 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-2xl text-left"
            >
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-left">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 系統工具區 */}
      <section
        id="systems"
        className="py-24 bg-slate-900 text-white text-left scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="flex flex-col md:flex-row gap-16 items-center text-left">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-black mb-4 italic text-left uppercase">
                進階者之路
              </h2>
              <p className="text-green-500 font-bold mb-8 tracking-widest text-left">
                「災難總是接踵而至，這正是世間的常態。」
                <br />
                <br />
                工欲善其事，必先利其器
              </p>

              <div className="space-y-6 text-left">
                {advantages2.map((adv, idx) => (
                  <div
                    key={idx}
                    className="flex group cursor-pointer text-left"
                    // onClick={() => window.open(socialLinks.openAccountUrl, '_blank')}
                  >
                    <div className="mr-6 text-2xl font-black text-slate-700 group-hover:text-green-500 transition-colors">
                      0{idx + 1}
                    </div>
                    <Link href={adv.path} className="border-b border-slate-800 pb-4 w-full text-left">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors text-left">
                        {adv.name}
                      </h4>
                      <p className="text-slate-500 text-sm text-left">
                        {adv.detail}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full text-left">
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group text-left">
                <BarChart3 className="text-green-500 mb-4 w-8 h-8" />
                <h4 className="font-black text-xl text-left">MultiCharts</h4>
                <p className="text-slate-400 text-sm mt-2 font-light text-left">
                  支援策略回測與自動下單對接
                </p>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group text-left">
                <Cpu className="text-green-500 mb-4 w-8 h-8" />
                <h4 className="font-black text-xl text-left">API Trading</h4>
                <p className="text-slate-400 text-sm mt-2 font-light text-left">
                  極致低延遲，專屬程式交易方案
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 實戰經歷 */}
      {/* <section id="experience" className="py-24 max-w-7xl mx-auto px-4 text-left">
        <div className="bg-green-600 rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-green-200 text-left">
            <div className="md:w-1/3 text-left">
              <div className="flex justify-start gap-4 mb-6">
                 <Gamepad2 className="w-10 h-10" />
                 <Dumbbell className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black leading-tight mb-4 text-left">跨界極致<br />成就專業</h2>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-10 text-left">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-left">
                 <h4 className="text-xl font-bold mb-2 text-left">🏆 電競遊戲好手</h4>
                 <p className="text-green-50 text-sm leading-relaxed font-light text-left">
                    曾征戰 LOL、王者榮耀賽場、射擊遊戲。這段經歷給了我遠超常人的反應神經與心理素質。
                 </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-left">
                 <h4 className="text-xl font-bold mb-2 text-left">🏋️ 健力愛好者</h4>
                 <p className="text-green-50 text-sm leading-relaxed font-light text-left">
                    放下搖桿，拿起槓鈴。深蹲與硬舉教會我紀律與堅持。我不只是業務，我是陪你一起訓練意志的交易夥伴。
                 </p>
              </div>
            </div>
        </div>
      </section> */}

      {/* 獨立 QR Code 加好友區塊 */}
      <section id="contact" className="py-24 bg-slate-100 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-slate-200">
            <div className="md:w-3/5 text-left">
              <h2 className="text-4xl font-black text-slate-800 mb-6">
                即刻加入
              </h2>
              <p className="text-slate-600 text-lg mb-8 font-light leading-relaxed">
                想了解更多關於{" "}
                <span className="font-bold">凱基期貨手續費優惠</span>、
                <span className="font-bold">程式交易開發</span> 或是{" "}
                <span className="font-bold">實戰心法</span> 嗎？
                <br />
                掃描右側 QR Code 我會親自協助您。
              </p>
              {/* <h2 className="text-4xl font-black text-slate-900 mb-6">「路要自己走」</h2>
              <p className="text-slate-600 text-lg mb-8 font-light leading-relaxed">
                交易的孤獨只有我們懂。不論你是剛踏入市場的新兵，還是傷痕累累的劍士。<br/>
                掃描 QR Code，讓我在這條「修羅之道」助你一臂之力。
              </p> */}
            </div>
            <div className="md:w-2/5 flex flex-col items-center">
              <div className="relative p-6 bg-white rounded-[2rem] shadow-inner border-2 border-slate-50 group">
                <div className="absolute inset-0 bg-green-500/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform"></div>
                <img
                  src="/zoro/imgs/M_502ysqhc_GW.png"
                  alt="LINE QR Code Large"
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                />
              </div>
              <p className="mt-6 text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">
                Scan for Support
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col items-center">
              <div className="relative p-6 bg-white rounded-[2rem] shadow-inner border-2 border-slate-50 group">
                <div className="absolute inset-0 bg-green-500/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform"></div>
                <img
                  src="/zoro/imgs/ig.jpg"
                  alt="LINE QR Code Large"
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                />
              </div>
              <p className="mt-6 text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">
                Scan for Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
