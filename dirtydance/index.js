const express = require('express');

const server = express();

// criando uma instancia com nome servidor

server.use(express.json());

// porta
server.listen(3000)

// rota
server.get('/home', (req, res) => {
    return res.send({home: 'ola mundo'})
})

// Para executar no powershell "node index.js" e colocar "http://localhost:3000/home"

//yarn