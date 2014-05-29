var config = require('./common').config();
var Hapi = require('hapi');

var server = Hapi.createServer(config.hapi.host, config.hapi.port);

var mongodb = require('./mongodb');
mongodb(server, config.mongodb);

server.route(require('./routes/contact'));

server.start();

