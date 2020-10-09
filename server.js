const HTTP_PORT = process.env.PORT || 3000;

const express = require('express');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

// ----------------------------------------------------------------------------------------

const server = express()
  .use(express.static('dist'))
  .listen(HTTP_PORT, () => console.log(`Listening on ${HTTP_PORT}`));

