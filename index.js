
//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//


const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// 设置 Ejs 为网页渲染引擎
app.set('view engine', 'ejs');

// 设置静态文件目录
app.use('/public', express.static(path.join(__dirname, 'public')));

// 主页路由
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// 规则页面
app.get('/rules', (req, res) => {
    res.render('rules.ejs');
});

// 规则页面
app.get('/faq', (req, res) => {
    res.render('faq.ejs');
});

app.get('/helloworld', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

// 404页面
app.get('/404/', (req, res) => {
    res.send('<h1>404 - Page Not Found</h1>');
});

app.get('*', (req, res) => {
    res.send('<h1>404 - Page Not Found</h1>');
});


// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
