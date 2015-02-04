var config = {
	port: 3000,
	secret: 'secret',
  redisPort: 6379,
  redisHost: 'localhost-redis',
	redisUrl: 'redis://localhost-redis',
	routes: {
		login: '/account/login',
		logout: '/account/logout',
    register: '/account/register',
    chat: '/chat',
    facebookAuth: '/auth/facebook',
    facebookAuthCallback: '/auth/facebook/callback',
    googleAuth: '/auth/google',
    googleAuthCallback: '/auth/google/callback'
	},
  google: {
    clientID: 'Google-ID',
    clientSecret: 'Google-Client-Secret'
  },
  host: 'http://habt.ice-ix.net:3000',
  facebook: {
    appID: 'Facebook-ID',
    appSecret: 'Facebook-secret'
  },
  crypto: {
    workFactor: 5000,
    keylen: 32,
    randomSize: 256
  },
  rabbitMQ: {
	host: 'localhost-rabbitmq',
	port: '5672',
	exchange: 'packtchat.log'
  }
};

module.exports = config;
