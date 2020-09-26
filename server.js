const path = require('path')
const express = require('express')
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use('/assets', express.static(path.join(__dirname, 'public')))

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


server.use(middlewares);
server.use(router);
server.listen(port);