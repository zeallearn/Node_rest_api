const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    //console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>hello new world </h1>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        //res.end('<h1>this is about page</h1>');
        res.end(data)
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1>this is hello page</h1>');
    }
    else {
        //res.abc();
        res.statusCode = 404;
        res.end('<h1>page not found</h1>');
    }
})

server.listen(port, ()=> {console.log(`server is listening on port ${port}`)});