/**
 * metadata example：
 * ---
 * title: 進健身房的紀念日
 * date: 2025-10-18
 * category: 健力日記
 * ---
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // 需要安裝 npm install gray-matter

const dir = path.join(__dirname, "../public/content");
const extensions = [".md", ".txt"];
const files = fs
  .readdirSync(dir)
  .filter((f) => extensions.some((ext) => f.endsWith(ext)));

const posts = files.map((file) => {
  const filePath = path.join(dir, file);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // 使用 gray-matter 解析 Markdown 的 Front Matter
  const { data } = matter(fileContent);

  // 處理日期格式：確保輸出為 YYYY-MM-DD，去掉 T00:00:00...
  let formattedDate = "";
  if (data.date) {
    // 如果 data.date 是 Date 物件，轉成 ISO 字串後取前 10 位
    const dateObj = new Date(data.date);
    formattedDate = dateObj.toISOString().split("T")[0];
  } else {
    // 如果沒有定義日期，抓取檔案系統的最後修改時間
    formattedDate = fs.statSync(filePath).mtime.toISOString().split("T")[0];
  }

  return {
    // 使用 .replace(/\.(md|txt)$/, '') 同時移除 .md 或 .txt
    id: file.replace(/\.(md|txt)$/, ""),

    // 標題也做同樣處理，並把連字號換成空格
    title: data.title || file.replace(/\.(md|txt)$/, "").replace(/-/g, " "),

    category:
      data.category ||
      (file.includes("trade") ? "期貨當沖交易心得" : "健力日記"),
    date: formattedDate,
    contentPath: `/zoro/content/${file}`, // 這裡保留原始檔案全名，確保路徑正確
  };
});

// 依日期排序（由新到舊）
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(
  path.join(__dirname, "../public/data/posts.json"),
  JSON.stringify(posts, null, 2),
);

console.log(`✅ posts.json 已自動更新！共 ${posts.length} 篇文章。`);
