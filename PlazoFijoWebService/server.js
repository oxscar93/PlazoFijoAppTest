const dotenv = require('dotenv');
dotenv.config();

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, process.env.IMAGE_FOLDER)
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/server.routes');
  routes(app, multer({storage: storage})); 

var errorModule = require('./api/handlers/error.handler'); 

app.use(errorModule.handleError);

app.listen(port);
console.log('Plazo fijo Backend server started on: ' + port);