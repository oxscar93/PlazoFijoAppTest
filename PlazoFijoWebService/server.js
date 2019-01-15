var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/server.routes');
  routes(app); 

var errorModule = require('./api/handlers/error.handler'); 

app.use(errorModule.handleError);

app.listen(port);
console.log('Plazo fijo Backend server started on: ' + port);