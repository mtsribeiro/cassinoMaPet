const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const { start_crash } = require("./games/crash.js");
const { getConnection } = require("./database.js");
const { login } = require("./consultas.js");

var contagem_tempo;

const port = 9000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../ui')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/home/index.html'))
})
app.get('/crash', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/crash/index.html'))
})
app.get('/double', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/double/index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  start_crash(io)
});


/*FORMULARIO LOGIN*/
getConnection();
app.post('/consultaLogin', async (req, res) => {
  var returnLogin = await login(req.body);
  if (returnLogin.length > 0) {
    res.json(returnLogin)
  } else {
    res.json('semLogin')
  }
  
})

// setTimeout(() => {
//   console.log('start_crash')
// }, 1000);
// setInterval(() => {
//   console.log('start_crash')
//   io.emit('start_crash')
  
// }, 5000);


server.listen(port, () => {
  console.log(`Servidor web em execução: http://localhost:${port}`);
});