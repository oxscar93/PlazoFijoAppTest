'use strict';

exports.calculatePlazo = function(entity) {
  var ganancia = entity.amount * ((entity.plazoInfo.tasa/100) * entity.plazoInfo.plazo/365);

  return {amount: ganancia,
          diff: ((entity.amount - ganancia) / entity.amount) * 100};
};

