var http = require('http');
var url = require('url');       // 用来解析url 地址

function start(route, handle) {
    http.createServer(function(req, res) {
        if (req.url != '/favicon.ico') {        // 清除 /favicon.ico
            console.log(req.url);
            var pathname =url.parse(req.url).pathname;          // 解析地址名
            route(handle, pathname);
            console.log(pathname);
        }
        res.end();
    }).listen(1234);
};
exports.start =start;       // 暴露函数接口


