const http = require('http');


http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });
        //resp.write('Hola mundo');
        let salida = {
            nombre: 'Guido',
            edad: '41',
            estadoCivil: 'Soltero',
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        resp.end();
    }


).listen(8080);

console.log('Escuchando en el puerto 8080');