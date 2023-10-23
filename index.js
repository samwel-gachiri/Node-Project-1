const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/plain'})
    res.end('hello world')
})

server.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is listening on port 3000');
})