var express = require('express'),
app = express(),
port = process.env.PORT || 3030,
mongoose = require('mongoose'),
Message = require('./api/models/msgModel'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:pass123@ds255282.mlab.com:55282/pacellijrmsgdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);

