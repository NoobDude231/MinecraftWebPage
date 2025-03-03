const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// 设置静态文件目录
app.use('/public', express.static(path.join(__dirname, 'public')));

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404页面
app.get('/404/', (req, res) => {
    res.send('<h1>404 - Page Not Found</h1>');
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
