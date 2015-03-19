var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var mongoClient = require('mongodb').MongoClient


// Connection URL
var url = 'mongodb://localhost:27017/live';
// Use connect method to connect to the Server
mongoClient.connect(url, function(err, db) {

  var collection = db.collection('updates');

  var insertUpdate = function(updateObject, callback) {

    collection.insert([
      updateObject
    ], function(err, result) {

      callback(result);
    });
  }

  //insertUpdate({'hest': 'pony', 'navn': 'misz'}, function(){ console.log('hopla!')});

  server.listen(port);

  // Make our db accessible to our router
  app.use(function(req,res,next){
      req.db = db;
      next();
  });
  // Use body parser
  app.use(bodyParser.json());
  
  // Make io accessible to our router
  app.use(function(req,res,next){
      req.io = io;        
      next();
  });

  io.on('connection', function (socket) {

    // Make our socket accessible to our router
    app.use(function(req,res,next){
        req.socket = socket;
        next();
    });
    
    
    socket.emit('init', 'GO!');
    socket.on('history', function (data) {
      console.log(data);
    });
  });

  // Recieve json-posts
  app.post('/backend/update', function(req, res){
    req.io.emit('update', req.body);
    res.send('RECIEVED: ' + req.body);
  });

  app.get('/backend', function (req, res) {
    res.send('RESPOND!!');
  });
  //JSON.stringify(new_tweets);
  console.log("Connected correctly to server");

  db.close();
});