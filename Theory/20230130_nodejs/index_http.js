const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("<h1>Hello Nodejs world</h2>");
});

server.listen(3000, function() {
    console.log("nodejs 서버 실행 중...");
});


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');Z
// }).listen(8080);


// console.log("Hello node.js World!");
// for(var i=0; i<10; i++) {
//     console.log(i);
// }

// 한줄 주석
/* 여러 줄 주석 
Node.js 문법은 ES6+ 문법 + 기존 자바스크립트 문법
*/