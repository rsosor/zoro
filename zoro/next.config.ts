import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支援預設的圖片優化
  },
  /* config options here */
  // 核心修正：加入這行
  // 注意：開頭一定要有斜線，最後不要有斜線
  basePath: '/zoro', 
  
  // 有些情況也建議加上這個，確保資產路徑正確
  assetPrefix: '/zoro/',
};

export default nextConfig;
