var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port);

app.get('/', function (req, res) {
  res.send('RESPOND!!');
});

io.on('connection', function (socket) {
  

  
  socket.emit('init', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});