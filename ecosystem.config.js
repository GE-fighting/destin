module.exports = {
  apps: [
    {
      name: 'destin',
      script: 'npm',
      args: 'start',
      instances: 1, // 单个实例
      exec_mode: 'fork', // 从'cluster'改为'fork'模式，使用单进程
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // 你想要应用运行的端口
      },
      // 如果需要日志轮转
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
}; 