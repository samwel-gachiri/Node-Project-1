const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead('content-type', 'text/plain')
    res.write('Hello world')
})

server.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is listening on port 3000');
})