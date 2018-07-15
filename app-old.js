// Sin xpress
const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-time': 'aplication/json' });
        // res.write('Hola mundo');
        let salida = {
            nombre: 'cristopher',
            edad: 20,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');