var express = require('express');
var expressLayouts = require('cloud/express-layouts');
var contract = require('cloud/routes/contract');

var app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);	

// Setup your keys here (TODO: replace with dummy values before publicizing)
app.locals.parseApplicationId = 'YOUR_APP_ID';
app.locals.parseJavascriptKey = 'YOUR_JAVASCRIPT_KEY';
app.locals.facebookApplicationId = 'YOUR_FB_APP_ID';

// Define all the endpoints
app.get('/', contract.new);
