import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支援預設的圖片優化
  },
  /* config options here */
};

export default nextConfig;
