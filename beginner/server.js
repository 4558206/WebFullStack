'use strict';

var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        //var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        /*
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
        */
        //request.addListener("end", function() {
        route(handle, pathname, response, request);
        //});
    }

    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}

exports.start = start;

/*
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
*/

/*
//创建http server，并传入回调函数：
var server = http.createServer(function(request, response) {
    //回调函数接收request和response对象，
    //获得HTTP请求的method和url：
    console.log(request.method + ': ' + request.url);
    //将HTTP响应200写入response，同时设置Content-Type：text/html：
    response.writeHead(200, {'Content-Type': 'text/html'});
    //将HTTP响应的HTML内容写入response：
    response.end('<h1>Hello world</h1>');
});

//让服务器监听8888端口：
server.listen(8888);

console.log('Server is running at http://127.0.0.1:8888/');
*/