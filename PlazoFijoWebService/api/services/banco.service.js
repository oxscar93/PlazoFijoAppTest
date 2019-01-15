'use strict';
var models = require('../models');
var persisterModule = require('../handlers/persister.handler');

exports.getBancoTasaList = function() {
  return persisterModule.findAllOneToMany(models.Banco,
                                            models.BancoPlazoTasa,
                                            'tasas')
                                            .then(result =>{
                                              var plazos = [];

                                              result.forEach(element => {
                                                var plazo = {}                                            
                                                plazo.banco = element.banco;
                                                
                                                  element.tasas.forEach(element => {
                                                    plazo['plazo' + element.plazo] = element.tasa;
                                                  });

                                                plazos.push(plazo);
                                              });

                                              return plazos;
                                           });
};

exports.getBancoList = function() {
  return persisterModule.findAll(models.Banco);
};

exports.getPlazoList = function(bancoId) {
  return persisterModule.findAll(models.BancoPlazoTasa, {where: {bancoId: bancoId}});
};
