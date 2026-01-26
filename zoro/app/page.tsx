// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import React, { useState } from 'react';

// /**
//  * 自定義內聯 SVG 圖示組件
//  * 避免外部庫引用問題，確保在所有環境下都能正常渲染
//  */
// const Icon = ({ name, className = "w-6 h-6" }) => {
//   const icons = {
//     TrendingUp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
//     ShieldCheck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
//     Clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
//     MessageCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 21 1.9-1.9a9 9 0 1 1 3.8 3.8z"></path></svg>,
//     BookOpen: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
//     Award: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
//     ChevronRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>,
//     Menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>,
//     X: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>,
//     ArrowUpRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>,
//     BarChart3: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>,
//     Phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
//     Zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
//     Cpu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>,
//     Gamepad2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>,
//     Dumbbell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="m3 21 18-18"></path><path d="m3 3 18 18"></path></svg>
//   };
//   return icons[name] || null;
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const openAccountUrl = "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F";

//   const advantages = [
//     {
//       icon: <Icon name="Zap" className="w-8 h-8 text-green-500" />,
//       title: "電競級反應速度",
//       description: "電競比賽背景，擁有極高的手速與判斷力，助您在當沖秒速行情中精準執行。"
//     },
//     {
//       icon: <Icon name="Dumbbell" className="w-8 h-8 text-green-500" />,
//       title: "健力者的自律",
//       description: "交易如健身，沒有捷徑。數年盯盤資歷，靠的是極致的紀律與對計畫的絕對執行。"
//     },
//     {
//       icon: <Icon name="Cpu" className="w-8 h-8 text-green-500" />,
//       title: "專業系統支援",
//       description: "從基本看盤到 MultiCharts 策略開發與 API 串接，為高階交易者提供最強火力支撐。"
//     }
//   ];

//   const tradingSystems = [
//     { name: "凱基優勢看盤下單系統", detail: "直覺流暢，適合全方位投資人" },
//     { name: "進階 API 串接服務", detail: "專為程式交易者打造，極低延遲" },
//     { name: "MultiCharts 策略對接", detail: "專業回測與自動執行方案" },
//     { name: "Day Trade 當沖實戰教學", detail: "分享數年盯盤實戰心法" }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
//       {/* 導覽列 */}
//       <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center">
//               <span className="text-xl md:text-2xl font-black italic tracking-tighter">
//                 KGI <span className="text-green-600">ZORO</span> | 凱基索隆
//               </span>
//             </div>
            
//             <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
//               <a href="#about" className="hover:text-green-600 transition">關於我</a>
//               <a href="#systems" className="hover:text-green-600 transition">看盤系統</a>
//               <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a>
//               <button 
//                 onClick={() => window.open(openAccountUrl, '_blank')}
//                 className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-200"
//               >
//                 <Icon name="MessageCircle" className="w-5 h-5" /> 聯繫宗佑
//               </button>
//             </div>

//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {isMenuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4">
//             <a href="#about" className="block font-medium py-2">關於我</a>
//             <a href="#systems" className="block font-medium py-2">看盤系統</a>
//             <a href="#experience" className="block font-medium py-2">實戰經歷</a>
//             <button 
//               onClick={() => window.open(openAccountUrl, '_blank')}
//               className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
//             >
//               <Icon name="MessageCircle" className="w-5 h-5" /> 聯繫宗佑
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Hero 區塊 */}
//       <section className="relative bg-[#0b121e] text-white py-24 overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#16a34a_0%,transparent_50%)]"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-3/5 text-left">
//             <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/30 mb-6 tracking-widest uppercase">
//                KGI Futures / 凱基期貨總公司
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
//               受盡苦難而不厭，<br />
//               <span className="text-green-500 italic">此乃修羅之道。</span>
//             </h1>
//             <p className="text-xl text-slate-400 mb-8 max-w-xl font-light leading-relaxed">
//               我是 <span className="text-white font-bold">謝宗佑</span>。從電競比賽的指尖反應，到健力訓練的鋼鐵意志；<br />
//               在期貨戰場盯盤數年，我只相信：<span className="text-green-400 font-medium">唯有極致的自律，才能帶來純粹的盈利。</span>
//             </p>
            
//             <div className="flex flex-wrap gap-4">
//               <a 
//                 href={openAccountUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-black text-xl shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition cursor-pointer flex items-center gap-3 no-underline"
//               >
//                 立即預約開戶 <Icon name="ChevronRight" />
//               </a>
//               <div className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold text-xl backdrop-blur-sm transition cursor-pointer flex items-center justify-center">
//                 手續費優惠洽詢
//               </div>
//             </div>

//             <div className="mt-12 p-4 border-l-4 border-green-500 bg-white/5 rounded-r-lg max-w-lg">
//               <p className="text-green-400 font-bold mb-1">【期間限定・推廣優惠】</p>
//               <p className="text-slate-400 text-sm">（優惠內容即將更新，敬請期待）</p>
//             </div>
//           </div>

//           {/* 個人照區塊 */}
//           <div className="md:w-2/5 flex justify-center relative">
//             <div className="relative group">
//               <div className="absolute -inset-4 bg-green-500/20 rounded-[2rem] blur-2xl group-hover:bg-green-500/30 transition duration-500"></div>
              
//               <div className="relative w-80 h-[28rem] bg-[#1a2332] rounded-[2rem] border-2 border-green-500/50 overflow-hidden shadow-2xl transition duration-500 group-hover:border-green-400 group-hover:scale-[1.02]">
//                  {/* 使用原生 img 並加上 loading="lazy" 以優化效能。
//                    針對 Next.js 環境中的警告，建議在您的開發環境中透過
//                    eslint-disable-next-line @next/next/no-img-element 來忽略。
//                  */}
//                  <img 
//                     src="imgs/zoro.jpg" 
//                     alt="謝宗佑 個人照" 
//                     className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-500"
//                     loading="lazy"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/400x600/1a2332/16a34a?text=%E8%AC%9D%E5%AE%97%E4%BD%91";
//                     }}
//                  />
//                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent opacity-90"></div>
                 
//                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
//                     <span className="text-green-500 block mb-1 font-mono text-xs tracking-[0.3em]">ZORO STYLE</span>
//                     <h2 className="text-3xl font-black tracking-widest mb-2 text-white">謝宗佑</h2>
//                     <div className="h-1 w-10 bg-green-500 mx-auto mb-4"></div>
//                     <p className="text-slate-300 text-sm font-bold">數年盯盤經驗</p>
//                     <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-tighter">Day Trader / Powerlifter</p>
//                  </div>
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 bg-green-600 p-4 rounded-lg shadow-xl transform rotate-3 z-20">
//                  <p className="font-black italic text-white">"既然要戰，就要贏！"</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 核心優勢 */}
//       <section className="py-24 max-w-7xl mx-auto px-4 text-left">
//         <div className="grid md:grid-cols-3 gap-12 text-left">
//           {advantages.map((item, idx) => (
//             <div key={idx} className="group relative bg-white p-10 rounded-2xl shadow-sm border-b-4 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-2xl">
//               <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-black mb-4">{item.title}</h3>
//               <p className="text-slate-500 leading-relaxed text-lg">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 系統工具區 */}
//       <section id="systems" className="py-24 bg-slate-900 text-white text-left">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-16 items-center">
//             <div className="md:w-1/2">
//               <h2 className="text-4xl font-black mb-4 italic">SYSTEMS & TOOLS</h2>
//               <p className="text-green-500 font-bold mb-8 tracking-widest">工欲善其事，必先利其器</p>
              
//               <div className="space-y-6">
//                 {tradingSystems.map((sys, idx) => (
//                   <div key={idx} className="flex group cursor-pointer" onClick={() => window.open(openAccountUrl, '_blank')}>
//                     <div className="mr-6 text-2xl font-black text-slate-700 group-hover:text-green-500 transition-colors">0{idx+1}</div>
//                     <div className="border-b border-slate-800 pb-4 w-full text-left">
//                       <h4 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors">{sys.name}</h4>
//                       <p className="text-slate-500 text-sm">{sys.detail}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
//                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group">
//                   <Icon name="BarChart3" className="text-green-500 mb-4 w-8 h-8" />
//                   <h4 className="font-black text-xl">MultiCharts</h4>
//                   <p className="text-slate-400 text-sm mt-2 font-light">支援策略回測與自動下單對接</p>
//                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition">
//                     <Icon name="ArrowUpRight" className="w-10 h-10" />
//                   </div>
//                </div>
//                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group mt-10">
//                   <Icon name="Cpu" className="text-green-500 mb-4 w-8 h-8" />
//                   <h4 className="font-black text-xl">API Trading</h4>
//                   <p className="text-slate-400 text-sm mt-2 font-light">極致低延遲，專屬程式交易方案</p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 實戰經歷 */}
//       <section id="experience" className="py-24 max-w-7xl mx-auto px-4">
//         <div className="bg-green-600 rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-green-200">
//            <div className="md:w-1/3 text-center md:text-left">
//               <div className="flex justify-center md:justify-start gap-4 mb-6">
//                  <Icon name="Gamepad2" className="w-10 h-10" />
//                  <Icon name="Dumbbell" className="w-10 h-10" />
//               </div>
//               <h2 className="text-4xl font-black leading-tight mb-4 text-left">跨界極致，<br />成就專業。</h2>
//            </div>
//            <div className="md:w-2/3 grid sm:grid-cols-2 gap-10 text-left">
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
//                  <h4 className="text-xl font-bold mb-2">🏆 電競遊戲好手</h4>
//                  <p className="text-green-50 text-sm leading-relaxed font-light">
//                    曾征戰 LOL、王者榮耀賽場、射擊遊戲。這段經歷給了我遠超常人的反應神經與心理素質。
//                  </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
//                  <h4 className="text-xl font-bold mb-2">🏋️ 健力愛好者</h4>
//                  <p className="text-green-50 text-sm leading-relaxed font-light">
//                    放下搖桿，拿起槓鈴。深蹲與硬舉教會我紀律與堅持。我不只是業務，我是陪你一起訓練意志的交易夥伴。
//                  </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
//                  <h4 className="text-xl font-bold mb-2">📉 數年盯盤當沖</h4>
//                  <p className="text-green-50 text-sm leading-relaxed font-light">
//                    2500 多天的實戰洗禮，深知日內波動的律動。我懂你的焦慮，更懂你需要的資源。
//                  </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md flex items-center justify-center">
//                  <div className="text-center">
//                     <p className="text-xs uppercase tracking-widest text-green-200">KGI FUTURES</p>
//                     <p className="text-2xl font-black">凱基期貨總公司</p>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* CTA 區塊 */}
//       <section className="py-24 bg-white text-center">
//         <h2 className="text-3xl md:text-4xl font-black mb-8 px-4">「災難總是接踵而至，這才是世間常態。」</h2>
//         <p className="text-slate-500 mb-12 max-w-2xl mx-auto px-4 text-lg">
//           行情瞬息萬變，你需要的不只是一個開戶網址，而是一個經歷過戰場、懂工具、且足夠自律的夥伴。
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
//            <a 
//              href={openAccountUrl}
//              target="_blank"
//              rel="noopener noreferrer"
//              className="bg-[#06C755] hover:bg-[#05b04b] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl transition flex items-center justify-center gap-3 no-underline"
//            >
//              <Icon name="MessageCircle" className="w-7 h-7" /> 加 LINE 諮詢
//            </a>
//            <button className="bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-full font-black text-xl shadow-xl transition flex items-center justify-center gap-3">
//              <Icon name="Phone" className="w-6 h-6" /> 電話預約
//            </button>
//         </div>
//       </section>

//       {/* 頁尾 */}
//       <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-12">
//             <div className="md:w-1/3 text-left">
//               <h3 className="text-2xl font-black italic mb-6">KGI <span className="text-green-600">ZORO</span></h3>
//               <p className="text-slate-600 font-bold mb-2">凱基期貨總公司 - 謝宗佑</p>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 台北市中正區重慶南路一段 2 號 13 樓<br />
//                 電話：02-2312-7127<br />
//                 114 年金管期總字第 004 號
//               </p>
//             </div>
//             <div className="md:w-2/3">
//                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                   <h4 className="text-slate-800 font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
//                     <Icon name="ShieldCheck" className="text-red-500 w-4 h-4" /> 期貨交易風險警語
//                   </h4>
//                   <div className="text-[11px] text-slate-400 leading-relaxed space-y-2">
//                     <p>期貨交易具有低保證金之財務槓桿特性，可能產生極大損失，請投資人評估自身財務能力與經濟情況。系統可能因網路或電力中斷等因素導致延遲，交易人應自行注意。</p>
//                     <p>1. 任何系統參數須由投資人自行設定。 2. 過去的績效並不代表未來獲利之保證。 3. 本公司不負責代客操作。 4. 相關圖表及數據僅供參考，不代表投資建議。</p>
//                     <p className="font-bold text-slate-500 mt-2">凱基期貨許可證照字號：114 年金管期總字第 004 號</p>
//                   </div>
//                </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px]">
//             © 2026 KGI ZORO 謝宗佑個人品牌行銷網 | 靜態展示頁面
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

"use client";

// import React, { useState } from 'react';

// /**
//  * 自定義內聯 SVG 圖示組件
//  */
// const Icon = ({ name, className = "w-6 h-6" }) => {
//   const icons = {
//     TrendingUp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
//     ShieldCheck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
//     MessageCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 21 1.9-1.9a9 9 0 1 1 3.8 3.8z"></path></svg>,
//     ChevronRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>,
//     Menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>,
//     X: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>,
//     BarChart3: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>,
//     Zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
//     Cpu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>,
//     Gamepad2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>,
//     Dumbbell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="m3 21 18-18"></path><path d="m3 3 18 18"></path></svg>
//   };
//   return icons[name] || null;
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const openAccountUrl = "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F";
//   const openLineOAUrl = "https://lin.ee/i7koSZH";


//   const advantages = [
//     {
//       icon: <Icon name="Zap" className="w-8 h-8 text-green-500" />,
//       title: "電競級反應速度",
//       description: "電競比賽背景，擁有極高的手速與判斷力，助您在當沖秒速行情中精準執行。"
//     },
//     {
//       icon: <Icon name="Dumbbell" className="w-8 h-8 text-green-500" />,
//       title: "健力者的自律",
//       description: "交易如健身，沒有捷徑。數年盯盤資歷，靠的是極致的紀律與對計畫的絕對執行。"
//     },
//     {
//       icon: <Icon name="Cpu" className="w-8 h-8 text-green-500" />,
//       title: "專業系統支援",
//       description: "從基本看盤到 MultiCharts 策略開發與 API 串接，為高階交易者提供最強火力支撐。"
//     }
//   ];

//   const tradingSystems = [
//     { name: "凱基優勢看盤下單系統", detail: "直覺流暢，適合全方位投資人" },
//     { name: "進階 API 串接服務", detail: "專為程式交易者打造，極低延遲" },
//     { name: "MultiCharts 策略對接", detail: "專業回測與自動執行方案" },
//     { name: "Day Trade 當沖實戰教學", detail: "分享數年盯盤實戰心法" }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
//       {/* 導覽列 */}
//       <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             {/* Logo 區塊 - 僅針對圖片放大 */}
//             <div className="flex items-center gap-3">
//               <img 
//                 src="/imgs/kgif_logo.png" 
//                 alt="KGIF Logo" 
//                 className="h-12 w-auto object-contain scale-125 mr-2" 
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                 }}
//               />
//               <div className="flex flex-col">
//                 <span className="text-xl font-black italic tracking-tighter leading-none">
//                   <span className="text-green-600">ZORO</span> | 凱基索隆
//                 </span>
//                 <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">謝宗佑</span>
//               </div>
//             </div>
            
//             <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
//               <a href="#about" className="hover:text-green-600 transition">關於我</a>
//               <a href="#systems" className="hover:text-green-600 transition">看盤系統</a>
//               <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a>
//               <button 
//                 onClick={() => window.open(openLineOAUrl, '_blank')}
//                 className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-200"
//               >
//                 <Icon name="MessageCircle" className="w-5 h-5" /> 聯繫宗佑
//               </button>
//             </div>

//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {isMenuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 text-left">
//             <a href="#about" className="block font-medium py-2 text-left">關於我</a>
//             <a href="#systems" className="block font-medium py-2 text-left">看盤系統</a>
//             <a href="#experience" className="block font-medium py-2 text-left">實戰經歷</a>
//             <button 
//               onClick={() => window.open(openLineOAUrl, '_blank')}
//               className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
//             >
//               <Icon name="MessageCircle" className="w-5 h-5" /> 聯繫宗佑
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Hero 區塊 - 恢復原本大小 */}
//       <section id="about" className="relative bg-[#0b121e] text-white py-24 overflow-hidden text-left">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#16a34a_0%,transparent_50%)]"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-3/5 text-left">
//             <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/30 mb-6 tracking-widest uppercase">
//                KGI Futures / 凱基期貨總公司
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-left">
//               受盡苦難而不厭<br />
//               <span className="text-green-500 italic text-left">此乃修羅之道</span>
//             </h1>
//             <p className="text-xl text-slate-400 mb-8 max-w-xl font-light leading-relaxed text-left">
//               我是 <span className="text-white font-bold">謝宗佑</span>。從電競比賽的指尖反應，到健力訓練的鋼鐵意志；<br />
//               在期貨戰場盯盤數年，我只相信：<span className="text-green-400 font-medium">唯有極致的自律，才能帶來純粹的盈利。</span>
//             </p>
            
//             <div className="flex flex-wrap gap-4 text-left">
//               <a 
//                 href={openAccountUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-black text-xl shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition cursor-pointer flex items-center gap-3 no-underline"
//               >
//                 立即預約開戶 <Icon name="ChevronRight" />
//               </a>
//               <div className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold text-xl backdrop-blur-sm transition cursor-pointer flex items-center justify-center">
//                 手續費優惠洽詢
//               </div>
//             </div>
//           </div>

//           {/* 個人照區塊 */}
//           <div className="md:w-2/5 flex justify-center relative">
//             <div className="relative group">
//               <div className="absolute -inset-4 bg-green-500/20 rounded-[2rem] blur-2xl group-hover:bg-green-500/30 transition duration-500"></div>
              
//               <div className="relative w-80 h-[28rem] bg-[#0b121e] rounded-[2rem] border-2 border-green-500/50 overflow-hidden shadow-2xl transition duration-500 group-hover:border-green-400 group-hover:scale-[1.02]">
//                  <img 
//                     src="/imgs/zoro.jpg" 
//                     alt="謝宗佑 個人照" 
//                     className="w-full h-full object-contain transition duration-500"
//                     loading="lazy"
//                     onError={(e) => {
//                       e.target.src = "https://placehold.jp/48/16a34a/ffffff/400x600.png?text=%E8%AC%9D%E5%AE%97%E4%BD%91%0A(PHOTO)";
//                     }}
//                  />
                 
//                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                 
//                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-[#0b121e] to-transparent">
//                     <span className="text-green-500 block mb-1 font-mono text-xs tracking-[0.3em]">ZORO STYLE</span>
//                     <h2 className="text-3xl font-black tracking-widest mb-2 text-white">謝宗佑</h2>
//                     <div className="h-1 w-10 bg-green-500 mx-auto mb-4"></div>
//                     <p className="text-slate-300 text-sm font-bold">數年盯盤經驗</p>
//                     <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-tighter">Day Trader / Powerlifter</p>
//                  </div>
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 bg-green-600 p-4 rounded-lg shadow-xl transform rotate-3 z-20">
//                  <p className="font-black italic text-white text-center">"既然要戰，就要贏！"</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 核心優勢 */}
//       <section className="py-24 max-w-7xl mx-auto px-4 text-left">
//         <div className="grid md:grid-cols-3 gap-12 text-left">
//           {advantages.map((item, idx) => (
//             <div key={idx} className="group relative bg-white p-10 rounded-2xl shadow-sm border-b-4 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-2xl text-left">
//               <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-black mb-4 text-left">{item.title}</h3>
//               <p className="text-slate-500 leading-relaxed text-lg text-left">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 系統工具區 */}
//       <section id="systems" className="py-24 bg-slate-900 text-white text-left">
//         <div className="max-w-7xl mx-auto px-4 text-left">
//           <div className="flex flex-col md:flex-row gap-16 items-center text-left">
//             <div className="md:w-1/2 text-left">
//               <h2 className="text-4xl font-black mb-4 italic text-left uppercase">Systems & Tools</h2>
//               <p className="text-green-500 font-bold mb-8 tracking-widest text-left">工欲善其事，必先利其器</p>
              
//               <div className="space-y-6 text-left">
//                 {tradingSystems.map((sys, idx) => (
//                   <div key={idx} className="flex group cursor-pointer text-left" onClick={() => window.open(openAccountUrl, '_blank')}>
//                     <div className="mr-6 text-2xl font-black text-slate-700 group-hover:text-green-500 transition-colors">0{idx+1}</div>
//                     <div className="border-b border-slate-800 pb-4 w-full text-left">
//                       <h4 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors text-left">{sys.name}</h4>
//                       <p className="text-slate-500 text-sm text-left">{sys.detail}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full text-left">
//                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group text-left">
//                   <Icon name="BarChart3" className="text-green-500 mb-4 w-8 h-8" />
//                   <h4 className="font-black text-xl text-left">MultiCharts</h4>
//                   <p className="text-slate-400 text-sm mt-2 font-light text-left">支援策略回測與自動下單對接</p>
//                </div>
//                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group mt-10 text-left">
//                   <Icon name="Cpu" className="text-green-500 mb-4 w-8 h-8" />
//                   <h4 className="font-black text-xl text-left">API Trading</h4>
//                   <p className="text-slate-400 text-sm mt-2 font-light text-left">極致低延遲，專屬程式交易方案</p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 實戰經歷 */}
//       <section id="experience" className="py-24 max-w-7xl mx-auto px-4 text-left">
//         <div className="bg-green-600 rounded-[3rem] p-10 md:p-20 text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-green-200 text-left">
//             <div className="md:w-1/3 text-left">
//               <div className="flex justify-start gap-4 mb-6">
//                  <Icon name="Gamepad2" className="w-10 h-10" />
//                  <Icon name="Dumbbell" className="w-10 h-10" />
//               </div>
//               <h2 className="text-4xl font-black leading-tight mb-4 text-left">跨界極致，<br />成就專業。</h2>
//             </div>
//             <div className="md:w-2/3 grid sm:grid-cols-2 gap-10 text-left">
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-left">
//                  <h4 className="text-xl font-bold mb-2 text-left">🏆 電競遊戲好手</h4>
//                  <p className="text-green-50 text-sm leading-relaxed font-light text-left">
//                     曾征戰 LOL、王者榮耀賽場、射擊遊戲。這段經歷給了我遠超常人的反應神經與心理素質。
//                  </p>
//               </div>
//               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-left">
//                  <h4 className="text-xl font-bold mb-2 text-left">🏋️ 健力愛好者</h4>
//                  <p className="text-green-50 text-sm leading-relaxed font-light text-left">
//                     放下搖桿，拿起槓鈴。深蹲與硬舉教會我紀律與堅持。我不只是業務，我是陪你一起訓練意志的交易夥伴。
//                  </p>
//               </div>
//             </div>
//         </div>
//       </section>

//       {/* 頁尾 */}
//       <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
//         <div className="max-w-7xl mx-auto px-4 text-left">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
//             <div className="md:w-1/3 text-left">
//               <div className="flex items-center gap-2 mb-6">
//                 <img src="/imgs/kgif_logo.png" alt="KGIF Logo" className="h-8 w-auto grayscale opacity-70" />
//                 <h3 className="text-xl font-black italic">KGI <span className="text-green-600 text-left">ZORO</span></h3>
//               </div>
//               <p className="text-slate-600 font-bold mb-2 text-left">凱基期貨總公司 - 謝宗佑</p>
//               <p className="text-slate-500 text-sm leading-relaxed text-left">
//                 台北市中正區重慶南路一段 2 號 13 樓<br />
//                 電話：02-2312-7127<br />
//                 114 年金管期總字第 004 號
//               </p>
//             </div>
//             <div className="md:w-2/3 text-left">
//                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-left">
//                   <h4 className="text-slate-800 font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2 text-left">
//                     <Icon name="ShieldCheck" className="text-red-500 w-4 h-4" /> 期貨交易風險警語
//                   </h4>
//                   <div className="text-[11px] text-slate-400 leading-relaxed space-y-2 text-left">
//                     <p className="text-left">期貨交易具有低保證金之財務槓桿特性，可能產生極大損失，請投資人評估自身財務能力與經濟情況。系統可能因網路或電力中斷等因素導致延遲，交易人應自行注意。</p>
//                     <p className="font-bold text-slate-500 mt-2 text-left">凱基期貨許可證照字號：114 年金管期總字第 004 號</p>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';

/**
 * 自定義內聯 SVG 圖示組件
 */
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    TrendingUp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    ShieldCheck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
    MessageCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 21 1.9-1.9a9 9 0 1 1 3.8 3.8z"></path></svg>,
    ChevronRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>,
    Menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>,
    X: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>,
    BarChart3: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>,
    Zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    Cpu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>,
    Gamepad2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>,
    Dumbbell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="m3 21 18-18"></path><path d="m3 3 18 18"></path></svg>
  };
  return icons[name] || null;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openAccountUrl = "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F";
  const openLineOAUrl = "https://lin.ee/i7koSZH";
  const openIGUrl = "https://www.instagram.com/trader.0222";
  const openThreadsUrl = "https://www.threads.com/@trader.0222"

    const zoroQuotes = [
    "「在此刻做出選擇吧。是相信自己，還是相信我們這群人？但我一直以來都無從得知結果，無論你選擇哪一個。——《進擊的巨人》里維·阿卡曼」",
    "「如果你不戰鬥，就贏不了。——《進擊的巨人》艾連·葉格」",
    "「不經歷痛苦，就無法學到任何教訓。因為如果不犧牲什麼，人就什麼也得不到。——《鋼之鍊金術師》愛德華·艾力克」",
    // "「所謂強者，並非僅僅是力量，而是那永不言敗的意志。」",
    "「冷靜下來，這就是所謂的『生存』。雖然很難，但如果不能保持理性，就會輸給本能。——《咒術迴戰》七海建人（一級術師，同時也是前上班族/交易員）」",
    "「災難總是接踵而至，這正是世間的常態。」",
    "「教練，我想贏錢...」——《灌籃高手》三井壽」",
    "「我是三井，一個永不放棄的人」——《灌籃高手》三井壽」",
    "「現在放棄，比賽就結束了！——《灌籃高手》安西教練」",
    "「如果我就死在這裡，那說明我不過是這種程度的男人。——《海賊王》羅羅亞索隆」",
    "「受盡苦難而不厭，此乃修羅之道。——《海賊王》羅羅亞索隆」",
    "「路要自己走，不管是苦是甜，都是自己選的。」"
  ];
  
  const advantages = [
    {
      icon: <Icon name="Zap" className="w-8 h-8 text-green-500" />,
      title: "三刀流般的執行力",
      description: "「傷痕是男兒的勳章」。在震盪的市場中，我以最剛猛的自律與速度，為您斬開獲利的道路。"
    },
    {
      icon: <Icon name="Dumbbell" className="w-8 h-8 text-green-500" />,
      title: "健力者的嚴格自律",
      description: "交易如健身，沒有捷徑。數年盯盤資歷，靠的是極致的自律，我深信「受盡苦難而不厭」，才是通往極致的唯一路徑。"
    },
    {
      icon: <Icon name="Cpu" className="w-8 h-8 text-green-500" />,
      title: "最強大的名刀系統",
      description: "從看盤軟體到 MultiCharts 策略研發或 API 串接自研看盤系統，為高階交易者提供最強火力支撐，助您在市場中游刃有餘。"
    }
  ];

  const tradingSystems = [
    { name: "凱基優勢看盤下單系統", detail: "直覺流暢，適合全方位投資人" },
    { name: "MultiCharts 策略對接", detail: "專業回測與自動執行方案" },
    { name: "進階 API 串接服務", detail: "專為程式交易者打造，極低延遲" },
    { name: "Day Trade 當沖實戰教學", detail: "分享數年盯盤實戰心法" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 導覽列 */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo 區塊 */}
            <div className="flex items-center gap-3">
              <img 
                src="/imgs/kgif_logo.png" 
                alt="KGIF Logo" 
                className="h-12 w-auto object-contain scale-125 mr-2" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-xl font-black italic tracking-tighter leading-none">
                  <span className="text-green-600">凱基期貨營業員·謝宗佑</span>
                </span>
                {/* <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Zoro</span> */}
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
              <a href="#about" className="hover:text-green-600 transition">關於我</a>
              <a href="#systems" className="hover:text-green-600 transition">凱基期貨軟體</a>
              {/* <a href="#experience" className="hover:text-green-600 transition">實戰經歷</a> */}
              <button 
                onClick={() => window.open(openLineOAUrl, '_blank')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-200"
              >
                <Icon name="MessageCircle" className="w-5 h-5" /> 聯繫宗佑
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 text-left">
            <a href="#about" className="block font-medium py-2 text-left">關於我</a>
            <a href="#systems" className="block font-medium py-2 text-left">凱基期貨軟體</a>
            {/* <a href="#experience" className="block font-medium py-2 text-left">實戰經歷</a> */}
            <button 
              onClick={() => window.open(openLineOAUrl, '_blank')}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircle" className="w-5 h-5"/> 聯繫宗佑
            </button>
          </div>
        )}
      </nav>

      {/* Hero 區塊 */}
      <section id="about" className="relative bg-[#0b121e] text-white py-24 overflow-hidden text-left">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#16a34a_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/30 mb-6 tracking-widest uppercase">
               KGI Futures / 凱基期貨總公司
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-left">
              受盡苦難而不厭<br />
              <span className="text-green-500 italic text-left">此乃修羅之道</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-xl font-light leading-relaxed text-left">
              從學生遊玩電競遊戲比賽的指尖反應，到健力訓練的鋼鐵意志。<br />
              在期貨戰場盯盤數年，我只相信：<br />
              <span className="text-green-400 font-medium">唯有極致的自律，才能帶來純粹的盈利。</span>
            </p>
            
            <div className="flex flex-wrap gap-4 text-left">
              <a 
                href={openAccountUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-md font-black text-xl shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition cursor-pointer flex items-center gap-3 no-underline"
              >
                立即線上開戶 <Icon name="ChevronRight" />
              </a>
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold text-xl backdrop-blur-sm transition cursor-pointer flex items-center justify-center">
                手續費優惠洽詢
              </div>
            </div>
          </div>

          {/* 個人照區塊 */}
          <div className="md:w-2/5 flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-500/20 rounded-[2rem] blur-2xl group-hover:bg-green-500/30 transition duration-500"></div>
              
              <div className="relative w-80 h-[28rem] bg-[#0b121e] rounded-[2rem] border-2 border-green-500/50 overflow-hidden shadow-2xl transition duration-500 group-hover:border-green-400 group-hover:scale-[1.02]">
                 <img 
                    src="/imgs/zoro.jpg" 
                    alt="謝宗佑 個人照" 
                    className="w-full h-full object-contain transition duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://placehold.jp/48/16a34a/ffffff/400x600.png?text=%E8%AC%9D%E5%AE%97%E4%BD%91%0A(PHOTO)";
                    }}
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-[#0b121e] to-transparent">
                    <span className="text-green-500 block mb-1 font-mono text-xs tracking-[0.3em]">ZORO STYLE</span>
                    <h2 className="text-3xl font-black tracking-widest mb-2 text-white">謝宗佑</h2>
                    <div className="h-1 w-10 bg-green-500 mx-auto mb-4"></div>
                    <p className="text-slate-300 text-sm font-bold">數年盯盤經驗</p>
                    <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-tighter">Day Trader / Powerlifter</p>
                 </div>
              </div>
              
              {/* 右上角懸浮 QR Code */}
              {/* <div 
                onClick={() => window.open(openLineOAUrl, '_blank')}
                className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-2xl border-2 border-green-500 cursor-pointer hover:scale-110 transition-transform group/qr"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-slate-50 p-1 rounded-lg">
                    <img 
                      src="/imgs/M_502ysqhc_GW.png"
                      alt="Line QR Code" 
                      className="w-20 h-20"
                    />
                  </div>
                  <span className="text-[10px] font-black text-slate-800 mt-2">掃描加 LINE</span>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-full animate-pulse font-bold">優惠</div>
                </div>
              </div> */}

              <div className="absolute -bottom-6 -right-6 bg-green-600 p-4 rounded-lg shadow-xl transform rotate-3 z-20">
                 <p className="font-black italic text-white text-center">"既然要戰，就要贏！"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 動態語錄跑馬燈 */}
      <div className="bg-green-600 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12">
           {[...zoroQuotes, ...zoroQuotes].map((quote, i) => (
             <span key={i} className="text-white font-black italic text-lg opacity-90 uppercase">
               {quote} <span className="mx-8 text-green-300">•</span>
             </span>
           ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* 核心優勢 */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-left">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">世界第一的野心</h2>
          <p className="text-slate-500 font-light">「我要成為世界第一的期貨營業員，讓我的名聲響徹雲霄！」</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {advantages.map((item, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-2xl shadow-sm border-b-4 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-2xl text-left">
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-left">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 系統工具區 */}
      <section id="systems" className="py-24 bg-slate-900 text-white text-left">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="flex flex-col md:flex-row gap-16 items-center text-left">
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-black mb-4 italic text-left uppercase">Systems & Tools</h2>
              <p className="text-green-500 font-bold mb-8 tracking-widest text-left">「災難總是接踵而至，這正是世間的常態。」<br/><br/>工欲善其事，必先利其器</p>
              
              <div className="space-y-6 text-left">
                {tradingSystems.map((sys, idx) => (
                  <div key={idx} className="flex group cursor-pointer text-left"
                    // onClick={() => window.open(openAccountUrl, '_blank')}
                  >
                    <div className="mr-6 text-2xl font-black text-slate-700 group-hover:text-green-500 transition-colors">0{idx+1}</div>
                    <div className="border-b border-slate-800 pb-4 w-full text-left">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors text-left">{sys.name}</h4>
                      <p className="text-slate-500 text-sm text-left">{sys.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full text-left">
               <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group text-left">
                  <Icon name="BarChart3" className="text-green-500 mb-4 w-8 h-8" />
                  <h4 className="font-black text-xl text-left">MultiCharts</h4>
                  <p className="text-slate-400 text-sm mt-2 font-light text-left">支援策略回測與自動下單對接</p>
               </div>
               <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition relative overflow-hidden group text-left">
                  <Icon name="Cpu" className="text-green-500 mb-4 w-8 h-8" />
                  <h4 className="font-black text-xl text-left">API Trading</h4>
                  <p className="text-slate-400 text-sm mt-2 font-light text-left">極致低延遲，專屬程式交易方案</p>
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
                 <Icon name="Gamepad2" className="w-10 h-10" />
                 <Icon name="Dumbbell" className="w-10 h-10" />
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
      <section id="qrcode" className="py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12 border border-slate-200">
            <div className="md:w-3/5 text-left">
              <h2 className="text-4xl font-black text-slate-800 mb-6">即刻加入</h2>
              <p className="text-slate-600 text-lg mb-8 font-light leading-relaxed">
                想了解更多關於 <span className="font-bold">凱基期貨手續費優惠</span>、<span className="font-bold">程式交易開發</span> 或是 <span className="font-bold">實戰心法</span> 嗎？<br/>
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
                  src="/imgs/M_502ysqhc_GW.png"
                  alt="LINE QR Code Large" 
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                />
              </div>
              <p className="mt-6 text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">Scan for Support</p>
            </div>
                        <div className="md:w-2/5 flex flex-col items-center">
              <div className="relative p-6 bg-white rounded-[2rem] shadow-inner border-2 border-slate-50 group">
                <div className="absolute inset-0 bg-green-500/5 rounded-[2rem] scale-0 group-hover:scale-100 transition-transform"></div>
                <img 
                  src="/imgs/ig.jpg"
                  alt="LINE QR Code Large" 
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                />
              </div>
              <p className="mt-6 text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">Scan for Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
            <div className="md:w-1/3 text-left">
              <div className="flex items-center gap-2 mb-6">
                <img src="/imgs/kgif_logo.png" alt="KGIF Logo" className="h-8 w-auto grayscale opacity-70" />
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
    </div>
  );
};

export default App;