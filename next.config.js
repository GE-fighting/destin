/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // 如果你使用外部图片域名，需要在这里添加
  },
  distDir: 'dist', // 输出目录
  // 如果部署在非根目录
  // basePath: '/destin',
};

module.exports = nextConfig; 