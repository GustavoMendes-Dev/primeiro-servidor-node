const http = require('http')

http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html;charset=utf-8'
    // })
    // res.end('<h1>Servidor funcionando!</h1>')
    res.writeHead(200, {
        'Content-Type': 'application ld/json;charset=utf-8'
    })
    res.end('Servidor Funcionando!'
    )
}).listen(3000, 'localhost', () => console.log('O servidor está rondando...'))