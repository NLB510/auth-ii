const express = require("express"),
  helmet = require("helmet"),
  cors = require('cors')

const corsConfig = {
  credentials: true,
  origin: true
};



// API ROUTERS
const registerRouter = require("./api/api_auth/registerRouter"),
  loginRouter = require("./api/api_auth/loginRouter"),
  usersRouter = require("./api/usersRouter");






const server = express();

server.use(helmet(), express.json(), cors(corsConfig));

//API ENDPOINTS
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", usersRouter);





server.get("/", (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
});

module.exports = server;
