const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 显式处理主要路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/world', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'world.html'));
});

// 处理其他请求 - 确保使用简单的通配符字符串
app.get('*', (req, res) => {
  // 首先尝试直接发送请求的文件
  const requestedPath = req.path;
  const filePath = path.join(__dirname, 'dist', requestedPath);
  
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 