const http = require('http')

const fs = require('fs')

const server=http.createServer((req,res)=>{

    let path='./views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        default:
            path += '404.html';
            break;
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(path,(data)=>{
        res.write(data);
        res.end();
    });


});

server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000');
});