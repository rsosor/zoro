const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/content');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const posts = files.map(file => ({
  id: file.replace('.md', ''),
  title: file.replace('.md', '').replace(/-/g, ' '),
  category: file.includes('trade') ? '期貨當沖交易心得' : '健力日記',
  date: fs.statSync(path.join(dir, file)).mtime.toISOString().split('T')[0],
  contentPath: `/zoro/content/${file}`
}));

fs.writeFileSync(
  path.join(__dirname, '../public/data/posts.json'), 
  JSON.stringify(posts, null, 2)
);
console.log('✅ posts.json 已自動更新！');