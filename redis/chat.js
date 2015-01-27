var client = require('./index').client, 
	q = require('q'),
	models = require('./models');


exports.addUser = function addUser(user, name, type){
	// multi() treats redis operation as atomic
	client.multi()
	.hset('user:' + user, 'name', name)
	.hset('user:' + user, 'type', type)
	.zadd('users', Date.now(), user)
	.exec();
};


exports.addRoom = function addRoom(room){
	if (room !== '') client.zadd('rooms', Date.now(), room);
};


exports.getRooms = function getRooms(cb){
	client.zrevrangebyscore('rooms', '+inf', '-inf', function(err,data){
		return cb(data);
	});
};
