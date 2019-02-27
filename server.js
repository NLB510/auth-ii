const express = require('express')
const helmet = require('helmet');


// db = require('./data/dbConfig');



// API ROUTERS



const server = express();

server.use(helmet());
server.use(express.json());


//API ENDPOINTS


server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
})


module.exports = server;