var express = require('express'),
	partials = require('express-partials'),
	app = express(),
	routes = require('./routes'),
	errorHandlers = require('./middleware/errorhandlers'),
	log = require('./middleware/log'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	csrf = require('csurf'),
	session = require('express-session'),
	RedisStore = require('connect-redis')(session),
	util = require('./middleware/utilities'),
	flash = require('connect-flash'),
	config = require('./config');
var io = require('./socket.io');
var passport = require('./passport');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser(config.secret));
app.use(session({
	secret: config.secret,
	saveUninitialized: true,
	resave: true,
	store: new RedisStore(
    {host: config.redisHost, port: config.redisPort})
}));
app.use(passport.passport.initialize());
app.use(passport.passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(csrf());
app.use(util.csrf);
app.use(util.authenticated);
app.use(flash());
app.use(util.templateRoutes);
//routes
app.get('/', routes.index);
app.get(config.routes.login, routes.login);
app.get(config.routes.logout, routes.logOut);
app.get(config.routes.chat, [util.requireAuthentication], routes.chat);
app.get(config.routes.register, routes.register);
app.post(config.routes.register, routes.registerProcess);
app.get('/error', function(req, res, next){
	next(new Error('A contrived error'));
});
passport.routes(app);
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

server=app.listen(config.port);
io.startIO(server);
console.log("App server running on port 3000");
