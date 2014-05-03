var express = require('express');
var expressLayouts = require('cloud/express-layouts');
var mainView = require('cloud/routes/app');

var app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// Setup your keys here (TODO: replace with dummy values before publicizing)
app.locals.parseApplicationId = 'yRju46x2iVXPYnhxEyEvadi0bom7JCiPtwMioKoV';
app.locals.parseJavascriptKey = '2mKlt7zQSNRCao3mIMfBo1a9VbowJBcWoIWXXvfX';
app.locals.facebookApplicationId = '661583543896224';

// Define all the endpoints
app.get('/', mainView.index);

app.listen();
