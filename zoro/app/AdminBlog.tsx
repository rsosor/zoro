// import React, { useState, useEffect } from 'react';
// import { 
//   PlusCircle, Save, Trash2, BookOpen, Clock, 
//   Layout, Type, CheckCircle2, AlertCircle
// } from 'lucide-react';

// // 標準 npm 導入方式
// import { initializeApp } from 'firebase/app';
// import { 
//   getFirestore, collection, addDoc, onSnapshot, 
//   query, doc, deleteDoc, serverTimestamp 
// } from 'firebase/firestore';
// import { 
//   getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged 
// } from 'firebase/auth';

// /**
//  * [雲端部署相容版 - 修正 TypeScript 與環境變數錯誤]
//  * 1. 使用 window['變數名'] 避開類型檢查
//  * 2. 增加 try-catch 確保環境變數讀取失敗時不崩潰
//  */
// const getSafeEnv = (key) => {
//   try {
//     // 檢查 import.meta 是否存在且包含 env
//     const meta = (window as any).import?.meta;
//     if (meta && meta.env) {
//       return meta.env[key];
//     }
//     // 檢查 process 是否存在 (Webpack/Node)
//     const proc = (window as any).process;
//     if (proc && proc.env) {
//       return proc.env[key];
//     }
//   } catch (e) {
//     // 靜默失敗
//   }
//   return undefined;
// };

// // 透過 window 存取全域變數以避免 "Cannot find name" 錯誤
// const win = window as any;

// const firebaseConfig = {
//   apiKey: getSafeEnv('VITE_FIREBASE_API_KEY') || win.__FIREBASE_API_KEY__,
//   authDomain: getSafeEnv('VITE_FIREBASE_AUTH_DOMAIN') || win.__FIREBASE_AUTH_DOMAIN__,
//   projectId: getSafeEnv('VITE_FIREBASE_PROJECT_ID') || win.__FIREBASE_PROJECT_ID__,
//   storageBucket: getSafeEnv('VITE_FIREBASE_STORAGE_BUCKET') || win.__FIREBASE_STORAGE_BUCKET__,
//   messagingSenderId: getSafeEnv('VITE_FIREBASE_MESSAGING_SENDER_ID') || win.__FIREBASE_MESSAGING_SENDER_ID__,
//   appId: getSafeEnv('VITE_FIREBASE_APP_ID') || win.__FIREBASE_APP_ID__
// };

// const finalConfig = (win.__firebase_config) 
//   ? JSON.parse(win.__firebase_config) 
//   : firebaseConfig;

// const app = initializeApp(finalConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const appId = typeof win.__app_id !== 'undefined' ? win.__app_id : 'default-app-id';

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const [formData, setFormData] = useState({
//     title: '',
//     category: '健力日記',
//     content: '',
//     imageUrl: '',
//     isPinned: false
//   });

//   useEffect(() => {
//     const initAuth = async () => {
//       try {
//         if (win.__initial_auth_token) {
//           await signInWithCustomToken(auth, win.__initial_auth_token);
//         } else {
//           await signInAnonymously(auth);
//         }
//       } catch (error) {
//         console.error("Auth error:", error);
//       }
//     };
//     initAuth();
//     const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (!user) return;

//     const postsCollection = collection(db, 'artifacts', appId, 'public', 'data', 'posts');
//     const q = query(postsCollection);

//     const unsubscribe = onSnapshot(q, 
//       (snapshot) => {
//         const docs = snapshot.docs.map(d => ({
//           id: d.id,
//           ...d.data()
//         }));
//         const sortedDocs = docs.sort((a, b) => 
//           (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
//         );
//         setPosts(sortedDocs);
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Firestore error:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user || !formData.title || !formData.content) return;

//     try {
//       const postsCollection = collection(db, 'artifacts', appId, 'public', 'data', 'posts');
//       await addDoc(postsCollection, {
//         ...formData,
//         authorId: user.uid,
//         createdAt: serverTimestamp(),
//       });
//       setFormData({ title: '', category: '健力日誌', content: '', imageUrl: '', isPinned: false });
//       showMsg('success', '文章已成功同步至雲端！');
//     } catch (error) {
//       showMsg('error', '發佈失敗：' + error.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('確定要從雲端刪除這份記錄嗎？')) return;
//     try {
//       const postRef = doc(db, 'artifacts', appId, 'public', 'data', 'posts', id);
//       await deleteDoc(postRef);
//       showMsg('success', '內容已從雲端移除');
//     } catch (error) {
//       showMsg('error', '刪除失敗');
//     }
//   };

//   const showMsg = (type, text) => {
//     setMessage({ type, text });
//     setTimeout(() => setMessage({ type: '', text: '' }), 3000);
//   };

//   if (!user) return (
//     <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
//       <div className="text-center space-y-4">
//         <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//         <p className="font-black tracking-widest animate-pulse">建立雲端加密通道中...</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
//       <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black shadow-lg">
//               佑
//             </div>
//             <div>
//               <h1 className="text-lg font-black leading-none tracking-tight">謝宗佑·個人後台</h1>
//               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Life & Trading Cloud</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="px-3 py-1 bg-green-50 rounded-lg flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="text-[10px] font-black text-green-700 uppercase">Live Database</span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto p-6 lg:p-10">
//         {message.text && (
//           <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
//             <CheckCircle2 className="text-green-400 w-5 h-5" />
//             <span className="font-bold">{message.text}</span>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//           <div className="lg:col-span-5">
//             <section className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
//               <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
//                 <PlusCircle className="text-indigo-600 w-7 h-7" /> 新增內容記錄
//               </h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">標題</label>
//                   <input 
//                     type="text" 
//                     value={formData.title}
//                     onChange={(e) => setFormData({...formData, title: e.target.value})}
//                     placeholder="輸入文章或日誌標題"
//                     className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:bg-white focus:outline-none transition-all font-bold"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">文章分類</label>
//                     <select 
//                       value={formData.category}
//                       onChange={(e) => setFormData({...formData, category: e.target.value})}
//                       className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:outline-none font-bold text-slate-700"
//                     >
//                       <option>健力日誌</option>
//                       <option>Day Trade 當沖實戰心得</option>
//                     </select>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">狀態設定</label>
//                     <button 
//                       type="button"
//                       onClick={() => setFormData({...formData, isPinned: !formData.isPinned})}
//                       className={`w-full py-4 rounded-2xl font-black border-2 transition-all ${
//                         formData.isPinned ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-100' : 'bg-slate-50 border-slate-100 text-slate-400'
//                       }`}
//                     >
//                       {formData.isPinned ? '★ 已置頂' : '設為置頂'}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">內容描述</label>
//                   <textarea 
//                     rows={8}
//                     value={formData.content}
//                     onChange={(e) => setFormData({...formData, content: e.target.value})}
//                     placeholder="請輸入日誌內容或心得詳細資訊..."
//                     className="w-full px-5 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:bg-white focus:outline-none font-medium resize-none leading-relaxed"
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit"
//                   className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black text-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
//                 >
//                   <Save className="w-6 h-6" /> 確認上傳雲端
//                 </button>
//               </form>
//             </section>
//           </div>

//           <div className="lg:col-span-7">
//             <section className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[600px]">
//               <div className="flex justify-between items-end mb-10">
//                 <div>
//                   <h2 className="text-2xl font-black flex items-center gap-3">
//                     <Layout className="text-slate-300 w-7 h-7" /> 已發佈列表
//                   </h2>
//                   <p className="text-slate-400 text-xs mt-1 font-bold">同步於 Firestore: artifacts / {appId}</p>
//                 </div>
//                 <div className="text-indigo-600 font-black text-4xl tabular-nums">
//                   {posts.length}
//                 </div>
//               </div>

//               {loading ? (
//                 <div className="space-y-6">
//                   {[1,2,3].map(i => <div key={i} className="h-32 bg-slate-50 rounded-[2rem] animate-pulse" />)}
//                 </div>
//               ) : posts.length === 0 ? (
//                 <div className="text-center py-32 border-4 border-dashed border-slate-50 rounded-[3rem]">
//                   <BookOpen className="w-16 h-16 text-slate-100 mx-auto mb-4" />
//                   <p className="text-slate-300 font-black text-lg">目前尚無任何發佈內容</p>
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   {posts.map((post) => (
//                     <div key={post.id} className="group p-7 bg-slate-50 hover:bg-white border-2 border-transparent hover:border-indigo-100 rounded-[2rem] transition-all flex items-start gap-6 relative shadow-sm hover:shadow-xl hover:shadow-indigo-100/30">
//                       {post.isPinned && (
//                         <div className="absolute top-0 right-14 bg-amber-500 text-white text-[9px] px-3 py-1 rounded-b-xl font-black tracking-widest shadow-sm">
//                           TOP PIN
//                         </div>
//                       )}
                      
//                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
//                         <Type className="text-indigo-200 w-7 h-7" />
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-3 mb-2.5">
//                           <span className="text-[10px] font-black px-3 py-1 bg-indigo-600 text-white rounded-lg uppercase tracking-wider">
//                             {post.category}
//                           </span>
//                           <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1.5 uppercase">
//                             <Clock className="w-3 h-3" /> 
//                             {post.createdAt?.toDate().toLocaleDateString('zh-TW')}
//                           </span>
//                         </div>
//                         <h3 className="font-black text-xl text-slate-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">
//                           {post.title}
//                         </h3>
//                         <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed font-medium">
//                           {post.content}
//                         </p>
//                       </div>

//                       <button 
//                         onClick={() => handleDelete(post.id)}
//                         className="p-3 text-slate-200 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all self-center"
//                       >
//                         <Trash2 className="w-6 h-6" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Sword, Activity, TrendingUp, 
//   BarChart3, Cpu, Zap, Terminal, 
//   ChevronRight, Hash, ShieldCheck, 
//   Layers, Filter
// } from 'lucide-react';

// /**
//  * [索隆風格 - 修鍊者儀表板 V2]
//  * 1. 調整色調：從純黑改為層次豐富的工業灰藍 (Slate-950)。
//  * 2. 移除背景大文字裝飾，強化區塊感。
//  * 3. 優化列表與內容的「玻璃擬態」視覺效果。
//  */

// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("ALL");

//   const coreAttributes = [
//     { name: "凱基 MultiCharts", value: "98%", desc: "策略同步率", icon: <BarChart3 className="w-4 h-4" /> },
//     { name: "API Trading", value: "12ms", desc: "傳輸延遲", icon: <Cpu className="w-4 h-4" /> },
//     { name: "SBD Total", value: "400kg", desc: "力量指標", icon: <Zap className="w-4 h-4" /> }
//   ];

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       // 實際應用中可從 GitHub Pages 讀取 md 或 posts.json
//       const mockPosts = [
//         {
//           id: '1',
//           title: '三刀流備賽：SBD 總和 400kg 達成路徑',
//           category: '健力日誌',
//           date: '2024.05.20',
//           content: '# 三刀流備賽心得\n\n「受盡苦難而不厭，此乃阿修羅之道。」\n\n這不只是力量的堆疊，更是意志的磨練。每一次深蹲到底部的停頓，都是為了下一次更有力的爆發。核心的穩定程度直接決定了起身的瞬間爆發力。',
//           fileName: 'lifting-meet-01.md'
//         },
//         {
//           id: '2',
//           title: '當沖戰場：在量價的刀光劍影中生存',
//           category: '當沖實戰',
//           date: '2024.05.18',
//           content: '# 當沖實戰筆記\n\n市場沒有憐憫。API 下單的快準狠，是生存的唯一保障。觀察五檔量價的跳動，就像預判對手的劍路。今日早盤波動率上升，策略同步率維持在 95% 以上。',
//           fileName: 'daytrade-20240518.md'
//         }
//       ];
      
//       setTimeout(() => {
//         setPosts(mockPosts);
//         setLoading(false);
//       }, 600);
//     };
//     fetchPosts();
//   }, []);

//   const filteredPosts = posts.filter(post => 
//     (activeTab === "ALL" || post.category === activeTab) &&
//     (post.title.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
//       <main className="max-w-[1400px] mx-auto p-6 lg:p-12 relative z-10">
        
//         {/* 頂部標題與狀態欄 */}
//         <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <div>
//             <div className="flex items-center gap-3 mb-3">
//               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
//               <span className="text-emerald-500 font-black text-[10px] tracking-[0.4em] uppercase">System: Operational</span>
//             </div>
//             <h1 className="text-5xl font-black text-white tracking-tighter italic flex items-center gap-2">
//               ZORO<span className="text-emerald-500 font-normal">/</span>LOG
//             </h1>
//           </div>

//           {/* 核心屬性面板 */}
//           <div className="flex flex-wrap gap-3 w-full lg:w-auto">
//             {coreAttributes.map((attr, i) => (
//               <div key={i} className="flex-1 lg:w-40 bg-slate-900/50 border border-slate-800 p-4 rounded-xl group hover:border-emerald-500/40 transition-all shadow-xl">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-slate-600 group-hover:text-emerald-500 transition-colors">{attr.icon}</span>
//                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">{attr.name}</span>
//                 </div>
//                 <div className="text-lg font-black text-white italic">{attr.value}</div>
//                 <div className="text-[10px] text-slate-600 font-bold mt-0.5">{attr.desc}</div>
//               </div>
//             ))}
//           </div>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* 左側：導航與列表控制 */}
//           <div className="lg:col-span-4 space-y-8">
            
//             {/* 搜尋區塊 */}
//             <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-lg">
//               <div className="flex items-center gap-2 mb-4 text-slate-500">
//                 <Search size={14} />
//                 <span className="text-[10px] font-black tracking-widest uppercase">Intel Search</span>
//               </div>
//               <input 
//                 type="text"
//                 placeholder="輸入關鍵字..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full bg-slate-950 border border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all font-bold text-white placeholder:text-slate-700"
//               />
//             </div>

//             {/* 修鍊類別切換 */}
//             <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-lg">
//               <div className="flex items-center gap-2 mb-4 text-slate-500">
//                 <Filter size={14} />
//                 <span className="text-[10px] font-black tracking-widest uppercase">Categories</span>
//               </div>
//               <div className="grid grid-cols-1 gap-2">
//                 {["ALL", "健力日誌", "當沖實戰"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`flex items-center justify-between px-4 py-3 font-black text-xs tracking-widest transition-all rounded-xl border ${
//                       activeTab === tab 
//                       ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
//                       : 'bg-slate-950 text-slate-500 border-slate-800 hover:border-slate-600'
//                     }`}
//                   >
//                     <span>{tab}</span>
//                     {activeTab === tab ? <Sword size={12} /> : <Hash size={12} className="opacity-20" />}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* 文章列表 */}
//             <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-slate-800">
//               {loading ? (
//                 <div className="p-8 text-center text-xs font-black tracking-widest text-slate-800 uppercase animate-pulse">Accessing Database...</div>
//               ) : filteredPosts.map(post => (
//                 <div 
//                   key={post.id}
//                   onClick={() => setSelectedPost(post)}
//                   className={`cursor-pointer group p-5 rounded-2xl border transition-all ${
//                     selectedPost?.id === post.id 
//                     ? 'bg-slate-900 border-emerald-500/50 shadow-lg' 
//                     : 'bg-transparent border-slate-900 hover:border-slate-800 hover:bg-slate-900/20'
//                   }`}
//                 >
//                   <div className="flex justify-between items-center mb-1.5">
//                     <span className="text-[9px] font-black text-emerald-500/70 uppercase tracking-widest">{post.date}</span>
//                     <ChevronRight size={14} className={`transition-transform ${selectedPost?.id === post.id ? 'translate-x-1 text-emerald-500' : 'text-slate-800'}`} />
//                   </div>
//                   <h3 className={`font-black text-base transition-colors ${selectedPost?.id === post.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
//                     {post.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 右側：詳細情報內容 */}
//           <div className="lg:col-span-8">
//             {selectedPost ? (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//                 <div className="bg-slate-900/40 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden">
//                   <div className="px-8 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <Layers size={14} className="text-emerald-500" />
//                       <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{selectedPost.category}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
//                       <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Secured Node: {selectedPost.id}</span>
//                     </div>
//                   </div>

//                   <div className="p-8 lg:p-14">
//                     <h2 className="text-4xl lg:text-5xl font-black text-white italic mb-10 tracking-tighter leading-tight">
//                       {selectedPost.title}
//                     </h2>
                    
//                     <div className="prose prose-invert max-w-none">
//                       <div className="text-slate-400 text-lg leading-loose font-medium whitespace-pre-wrap">
//                         {selectedPost.content}
//                       </div>
//                     </div>

//                     <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
//                       <div className="flex items-center gap-4">
//                         <ShieldCheck className="text-emerald-500/30" size={24} />
//                         <div>
//                           <p className="text-[9px] font-black text-slate-600 tracking-[0.2em] uppercase leading-none">Intelligence Verified</p>
//                           <p className="text-[10px] text-slate-500 font-bold mt-1">Source: Static GitHub Pages Repository</p>
//                         </div>
//                       </div>
//                       <div className="flex gap-1.5">
//                         {[1, 2, 3, 4, 5].map(i => (
//                           <div key={i} className={`h-1 w-6 rounded-full ${i <= 3 ? 'bg-emerald-500/50' : 'bg-slate-800'}`}></div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="h-full min-h-[550px] rounded-[2.5rem] border-2 border-dashed border-slate-900 flex flex-col items-center justify-center opacity-40 group">
//                 <div className="relative">
//                   <div className="w-24 h-24 border-4 border-slate-800 rounded-full flex items-center justify-center group-hover:border-emerald-500/20 transition-all duration-700">
//                     <Terminal size={40} className="text-slate-800 group-hover:text-emerald-500/30 transition-all" />
//                   </div>
//                 </div>
//                 <h3 className="text-[10px] font-black text-slate-800 tracking-[0.8em] mt-8 uppercase">Wait for Input...</h3>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }