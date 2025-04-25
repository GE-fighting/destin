/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 将应用程序生成为静态HTML
  images: {
    unoptimized: true, // 静态导出不支持图像优化
  },
  distDir: 'dist', // 输出目录
  // 如果部署在非根目录
  // basePath: '/destin',
};

module.exports = nextConfig; 