'use strict';
var plazoService = require('../services/plazo.service');
var execHandler = require('../handlers/execution.handler');

exports.calculatePlazo = function(req, res, next) {
  execHandler.executeNoPromise(() => 
  { return plazoService.calculatePlazo(req.body)}, next, res);
};

