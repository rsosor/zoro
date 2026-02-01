"use client";

import React, { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import {
  Search,
  Sword,
  Activity,
  TrendingUp,
  BarChart3,
  Cpu,
  Zap,
  Trophy,
  ChevronRight,
  Hash,
  CheckCircle2,
  Flame,
  Filter,
  Calendar,
  FileText,
  Clock,
  Target,
  BookOpen,
} from "lucide-react";

/**
 * [索隆風格 - 實時數據版 2.0]
 * 修復 Tabs 點擊與過濾邏輯
 */

// 模擬 .md 檔案內容
const MOCK_DATABASE = [
  {
    id: "1",
    title: "三刀流備賽：SBD 總和 400kg 達成路徑",
    category: "健力日記",
    date: "2024.05.20",
    content: `
### 「受盡苦難而不厭，此乃阿修羅之道。」

這不只是力量的堆疊，更是意志的磨練。

#### 今日訓練重點
- **深蹲 (Squat)**: 140kg x 5 reps (強調底部停頓)
- **臥推 (Bench)**: 100kg x 3 reps
- **硬舉 (Deadlift)**: 160kg x 1 rep

> 核心的穩定程度直接決定了起身的瞬間爆發力。

每一次深蹲到底部的停頓，都是為了下一次更有力的爆發。今天訓練非常順利，感覺力量正在源源不絕地湧出！
    `,
  },
  {
    id: "2",
    title: "當沖戰場：在量價的刀光劍影中生存",
    category: "期貨當沖交易心得",
    date: "2024.05.18",
    content: `
# 交易日誌：捕捉早盤波動

今天的市場充滿活力！透過 **API 下單** 的快準狠，成功捕捉到了早盤的關鍵波動。

### 戰術分析
1. **觀察五檔量價**：就像預判對手的劍路。
2. **策略同步率**：維持在 \`98%\`。
3. **獲利結果**：目標達成。

---
*「如果不豁出性命，也開創不了未來。」*
    `,
  },
  {
    id: "3",
    title: "Canvas 佈署指南",
    category: "健力日記",
    date: "2024.05.21",
    content: `
### 快速佈署說明
這是透過模擬資料夾讀取新增的文章。

#### 操作步驟
1. 打開 \`App.jsx\`
2. 尋找 \`MOCK_DATABASE\`
3. 貼入新的物件 (支援 **Markdown**)

\`\`\`javascript
{
  id: '4',
  title: '新文章',
  content: '# Hello World'
}
\`\`\`
    `,
  },
];

/**
 * [索隆風格 - 外部資料讀取版]
 * 1. 從 /public/data/posts.json 讀取清單
 * 2. 從 /public/content/*.md 讀取內容
 */

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("ALL");
  // 實時狀態
  const [currentTime, setCurrentTime] = useState("");
  const [todayDay, setTodayDay] = useState("");
  const [todayDate, setTodayDate] = useState("");

  // 自動從資料庫獲取所有分類，確保沒有重複且包含 ALL
  // 自動生成的分類清單 (根據抓取到的 posts 決定)
  const categories = useMemo(() => {
    const rawCategories = MOCK_DATABASE.map((p) => p.category.trim());
    return ["ALL", ...new Set(rawCategories)];
  }, []);

  // 實時計時器
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];

      const timeString = now.toLocaleTimeString("zh-TW", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentTime(timeString);
      setTodayDay(days[now.getDay()]);
      setTodayDate(
        `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // // 模擬讀取資料
  // useEffect(() => {
  //   const loadFolderData = async () => {
  //     setLoading(true);
  //     try {
  //       await new Promise(resolve => setTimeout(resolve, 400));
  //       setPosts(MOCK_DATABASE);
  //     } catch (error) {
  //       console.error("無法讀取數據", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadFolderData();
  // }, []);

  // const handleSelectPost = async (post) => {
  //   if (selectedPost && selectedPost.id === post.id) return;
  //   setSelectedPost({ ...post, content: "正在檢索..." });

  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 200));
  //     const content = MOCK_DATABASE.find(p => p.id === post.id)?.content || "找不到文件。";
  //     setSelectedPost({ ...post, content });
  //   } catch (error) {
  //     setSelectedPost({ ...post, content: "讀取失敗。" });
  //   }
  // };

  // 1. 初始化讀取：從 public/data/posts.json 獲取清單
  useEffect(() => {
    const fetchPostList = async () => {
      setLoading(true);
      try {
        // 請確保你的專案 public/data/ 下有 posts.json
        const response = await fetch("/zoro/data/posts.json");
        if (!response.ok) throw new Error("無法取得文章清單");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("資料加載失敗:", error);
        // 若失敗，提供一個 fallback 避免畫面空白
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPostList();
  }, []);

  // 2. 選取文章：根據路徑讀取 public/content/*.md
  const handleSelectPost = async (post) => {
    if (selectedPost && selectedPost.id === post.id) return;

    // 先顯示載入中狀態
    setSelectedPost({ ...post, content: "正在從卷軸中解開封印..." });

    try {
      // 根據 posts.json 裡面的 contentPath 讀取，例如 /content/1.md
      const response = await fetch(post.contentPath);
      if (!response.ok) throw new Error("讀取 MD 檔案失敗");
      const text = await response.text();
      setSelectedPost({ ...post, content: text });
    } catch (error) {
      console.error("內容讀取錯誤:", error);
      setSelectedPost({
        ...post,
        content: "### 讀取失敗\n無法從指定的路徑找到 Markdown 檔案。",
      });
    }
  };

  // 強化過濾邏輯：移除空格干擾
  const filteredPosts = posts.filter((post) => {
    const matchesTab =
      activeTab === "ALL" || post.category.trim() === activeTab;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const coreStats = [
    {
      name: "Current Time",
      value: currentTime,
      desc: "實時修煉計時",
      icon: <Clock className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      name: "Calendar",
      value: todayDay,
      desc: todayDate,
      icon: <Calendar className="w-5 h-5" />,
      color: "text-rose-500",
    },
    // {
    //   name: "SBD Total",
    //   value: "400kg",
    //   desc: "目前力量巔峰",
    //   icon: <Zap className="w-5 h-5" />,
    //   color: "text-orange-500"
    // }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <main className="max-w-[1300px] mx-auto p-6 lg:p-12">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                Live
              </span>
              <span className="text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase italic">
                交易與健身都需要極其強大的自律...記錄並分享我的心得。
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-700 tracking-tighter flex items-center gap-3">
              <Sword className="text-emerald-500 rotate-45" size={32} />
              凱基期貨營業員
              <span className="text-emerald-500 font-light text-2xl">/</span>
              謝宗佑
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            {coreStats.map((stat) => (
              <div
                key={stat.name}
                className="flex-1 lg:w-44 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
                <div className="text-xl font-black text-slate-900 leading-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">
                  {stat.desc}
                </div>
                <div className="text-[9px] text-slate-300 font-black uppercase mt-2 border-t border-slate-50 pt-2">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* List Section */}
          <div className="lg:col-span-4 space-y-6 relative z-20">
            {/* 搜尋欄位 */}
            <div className="relative group">
              <input
                type="text"
                placeholder="搜尋標題名稱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 px-12 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-bold text-slate-800 shadow-sm"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors"
                size={20}
              />
            </div>

            {/* 分類選單 - 確保 z-index 最高且點擊範圍清晰 */}
            <div className="flex flex-wrap gap-2 py-2">
              {categories.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-30 px-5 py-2.5 rounded-full font-black text-xs tracking-wider transition-all border cursor-pointer select-none active:scale-90 ${
                    activeTab === tab
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200"
                      : "bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                <BookOpen size={12} /> Repository Files
              </h4>
              {loading ? (
                <div className="p-12 text-center animate-pulse text-xs font-bold text-slate-300 tracking-[0.2em]">
                  正在讀取資料夾...
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => handleSelectPost(post)}
                    className={`cursor-pointer group p-6 rounded-2xl border transition-all ${
                      selectedPost?.id === post.id
                        ? post.category === "期貨當沖交易心得"
                          ? "bg-white border-orange-500 shadow-xl shadow-orange-100/50 scale-[1.02]"
                          : "bg-white border-emerald-500 shadow-xl shadow-emerald-100/50 scale-[1.02]"
                        : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${
                          post.category === "健力日記"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 italic">
                        {post.id}.md
                      </span>
                    </div>
                    <h3
                      className={`font-black text-lg leading-tight transition-colors ${
                        selectedPost?.id === post.id
                          ? post.category === "期貨當沖交易心得"
                            ? "text-orange-600"
                            : "text-emerald-700"
                          : "text-slate-500 group-hover:text-slate-800"
                      }`}
                    >
                      {post.title}
                    </h3>
                  </div>
                ))
              )}
              {!loading && filteredPosts.length === 0 && (
                <div className="p-10 text-center border-2 border-dashed border-slate-100 rounded-2xl">
                  <p className="text-xs font-bold text-slate-300 uppercase italic">
                    無匹配檔案
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-8 relative z-10">
            {selectedPost ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <article className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-white p-8 lg:p-16 relative overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 p-8 opacity-[0.05] ${selectedPost.category === "期貨當沖交易心得" ? "text-orange-500" : "text-emerald-500"}`}
                  >
                    <Flame size={150} />
                  </div>

                  <header className="mb-12 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedPost.category === "期貨當沖交易心得"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        <Trophy size={16} />
                      </div>
                      <span
                        className={`font-black text-xs uppercase tracking-[0.2em] ${
                          selectedPost.category === "期貨當沖交易心得"
                            ? "text-orange-600"
                            : "text-emerald-600"
                        }`}
                      >
                        {selectedPost.category}
                      </span>
                      <span className="text-slate-300 mx-2">|</span>
                      <span className="text-slate-400 font-bold text-xs italic">
                        {selectedPost.date}
                      </span>
                    </div>

                    <h2
                      className={`text-4xl lg:text-5xl font-black leading-[1.2] mb-4 tracking-tighter italic transition-colors duration-500 ${
                        selectedPost.category === "期貨當沖交易心得"
                          ? "text-orange-600"
                          : "text-emerald-700"
                      }`}
                    >
                      {selectedPost.title}
                    </h2>
                  </header>

                  <div className="relative z-10">
                    <div
                      className="markdown-body prose prose-slate max-w-none 
                      prose-headings:font-black prose-headings:italic prose-headings:tracking-tighter
                      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                      prose-p:text-slate-600 prose-p:text-lg prose-p:leading-relaxed
                      prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                      prose-strong:text-slate-900 prose-strong:font-black
                      prose-code:bg-slate-100 prose-code:px-1 prose-code:rounded prose-code:text-emerald-600
                      prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-6
                    "
                    >
                      <ReactMarkdown>{selectedPost.content.replace(/^---[\s\S]*?---/, '')}</ReactMarkdown>
                    </div>
                  </div>

                  <footer className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <CheckCircle2
                        className={`${selectedPost.category === "期貨當沖交易心得" ? "text-orange-500" : "text-emerald-500"} shadow-sm`}
                        size={28}
                      />
                      <div>
                        <p className="text-[10px] font-black text-slate-900 tracking-[0.1em] uppercase">
                          Security Verified
                        </p>
                        <p className="text-[11px] text-slate-400 font-medium italic">
                          {selectedPost.category === "期貨當沖交易心得"
                            ? "「所謂強者，就是能看清現狀的人。」"
                            : "「吾之修煉，永無止境。」"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-slate-300 tracking-widest uppercase italic">
                        Mastering the Sword
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${selectedPost.category === "期貨當沖交易心得" ? "bg-orange-500" : "bg-emerald-500"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </footer>
                </article>
              </div>
            ) : (
              <div className="h-full min-h-[500px] bg-white/40 rounded-[2.5rem] border-4 border-dashed border-white flex flex-col items-center justify-center group text-center p-12">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Activity size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-slate-300 tracking-widest uppercase italic">
                  等待選取修煉卷軸...
                </h3>
                <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest opacity-60">
                  Waiting for scroll decryption
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
