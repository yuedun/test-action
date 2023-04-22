//导入模块是require，就类似于import java.io
const http = require('http');

//1，创建一个Httpserver服务
//2，监听一个端口8888
//3，启动运行Node httpserver.js
//4，在浏览器访问Http://localhost:8888

http.createServer(function (request, response) {
    //浏览器怎么认识hello server
    //告诉浏览器将以text/plain去解析hello server这段数据
    response.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    //给浏览器输出内容
    response.end("<h1>hello server</h1>");
}).listen(8888);


console.log("启动的服务是：http://localhost:8888");