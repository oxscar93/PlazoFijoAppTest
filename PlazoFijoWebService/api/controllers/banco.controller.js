'use strict';

var execHandler = require('../handlers/execution.handler');
var bancoService = require('../services/banco.service');

exports.getBancoTasaList = function(req, res, next) {
  execHandler.execute(() => 
  { return bancoService.getBancoTasaList()}, next, res);
};

exports.getBancoList = function(req, res, next) {
  execHandler.execute(() => 
  { return bancoService.getBancoList()}, next, res);
};

exports.getPlazoList = function(req, res, next) {
  execHandler.execute(() => 
  { return bancoService.getPlazoList(req.params.bancoId)}, next, res);
};