'use strict';
module.exports = (sequelize, DataTypes) => {
  var BancoPlazoTasa = sequelize.define('BancoPlazoTasa', {
    plazo: DataTypes.INTEGER,
    tasa: DataTypes.INTEGER,
    bancoId: DataTypes.INTEGER,
  });
  
  return BancoPlazoTasa;
};