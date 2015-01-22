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
    clientID: '1098278791176-tqhv2u15bd648psrhb9ojh0d390v5ppn.apps.googleusercontent.com',
    clientSecret: '5pqvv6iVWGFNrow7IITzwirS'
  },
  host: 'http://habt.ice-ix.net:3000',
  facebook: {
    appID: '734622916633799',
    appSecret: '51595d19ca603490ead9a31c214e900e'
  },
  crypto: {
    workFactor: 5000,
    keylen: 32,
    randomSize: 256
  }
};

module.exports = config;
