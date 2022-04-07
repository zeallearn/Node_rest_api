const req = require('express/lib/request');
const res = require('express/lib/response');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    //console.log(req);
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-type','text/html')
    res.end('<h1>hello world </h1>')
})

server.listen(port, ()=> {console.log(`server is listening on port ${port}`)});