var amqp = require('amqp'),
	config = require('../config'),
	q = require('q');

module.exports = q.Promise(function(resolve, reject, notify){
	var rabbit = amqp.createConnection({host: config.rabbitMQ.host, port: config.rabbitMQ.port});
	rabbit.on('ready', function() {
		resolve(rabbit);
	});
});
