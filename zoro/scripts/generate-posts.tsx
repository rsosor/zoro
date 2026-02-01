const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // 需要安裝 npm install gray-matter

const dir = path.join(__dirname, '../public/content');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const posts = files.map(file => {
  const filePath = path.join(dir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // 使用 gray-matter 解析 Markdown 的 Front Matter
  const { data } = matter(fileContent);
  
  // 處理日期格式：確保輸出為 YYYY-MM-DD，去掉 T00:00:00...
  let formattedDate = '';
  if (data.date) {
    // 如果 data.date 是 Date 物件，轉成 ISO 字串後取前 10 位
    const dateObj = new Date(data.date);
    formattedDate = dateObj.toISOString().split('T')[0];
  } else {
    // 如果沒有定義日期，抓取檔案系統的最後修改時間
    formattedDate = fs.statSync(filePath).mtime.toISOString().split('T')[0];
  }

  return {
    id: file.replace('.md', ''),
    title: data.title || file.replace('.md', '').replace(/-/g, ' '),
    category: data.category || (file.includes('trade') ? '期貨當沖交易心得' : '健力日記'),
    date: formattedDate,
    contentPath: `/zoro/content/${file}`
  };
});

// 依日期排序（由新到舊）
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(
  path.join(__dirname, '../public/data/posts.json'), 
  JSON.stringify(posts, null, 2)
);

console.log(`✅ posts.json 已自動更新！共 ${posts.length} 篇文章。`);