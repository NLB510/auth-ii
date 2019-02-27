const express = require('express')
const helmet = require('helmet');






// API ROUTERS
const registerRouter = require('./api/api_auth/registerRouter');
const loginRouter = require('./api/api_auth/loginRouter');
const usersRouter = require('./api/usersRouter');


const server = express();

server.use(helmet());
server.use(express.json());


//API ENDPOINTS
server.use('/api/register', registerRouter);
server.use('api/login', loginRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
})


module.exports = server;