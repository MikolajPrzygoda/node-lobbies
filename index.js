const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8888

app.use(express.static('static'));

server.listen(PORT);

io.on('connection', (socket) => {
  console.log(`${socket.client.id} connected.`);

  socket.on('newUser', (data, callback) => {
    console.log(`creating user with '${data}'.`);
    callback(true);
  });

  socket.on('getUsers', (callback) => {
    users = [
      {
        name: 'Ala',
        rank: 1
      },
      {
        name: 'Bob',
        rank: 2
      },
      {
        name: 'Clay',
        rank: 3
      },
    ];
    callback(users);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.client.id} disconnected.`);
  });
});
