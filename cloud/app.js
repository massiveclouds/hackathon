var express = require('express');
var expressLayouts = require('cloud/express-layouts');

var app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.locals.parseApplicationId 		= 'yRju46x2iVXPYnhxEyEvadi0bom7JCiPtwMioKoV';
app.locals.parseJavascriptKey 		= '2mKlt7zQSNRCao3mIMfBo1a9VbowJBcWoIWXXvfX';
app.locals.facebookApplicationId 	= '661583543896224';

//Controllers
var appController = require('cloud/routes/app');

app.get('/', 				appController.index);
app.get('/login',			appController.login);
app.get('/signup', 			appController.signup);
app.get('/home', 			appController.home);
app.get('/create', 			appController.create);
app.get('/oath/:oathId', 	appController.showOath);
app.get('/imHere/:oathId/:lat/:lon', appController.imHere);

app.listen();