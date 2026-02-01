// app/api/posts/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const contentDirectory = path.join(process.cwd(), 'public/content');
    
    // 檢查資料夾是否存在，不存在就建立它
    if (!fs.existsSync(contentDirectory)) {
      return NextResponse.json([]);
    }

    const filenames = fs.readdirSync(contentDirectory);

    const posts = filenames
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(contentDirectory, file);
        const stats = fs.statSync(filePath);
        
        return {
          id: file.replace('.md', ''),
          title: file.replace('.md', '').replace(/-/g, ' '),
          category: file.includes('交易') ? '期貨當沖交易心得' : '健力日記',
          date: stats.mtime.toISOString().split('T')[0], // 格式化日期 2024-05-20
          contentPath: `/content/${file}`,
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json(posts);
  } catch (error) {
    // 關鍵：將報錯轉為 JSON，避免傳回 HTML
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}