'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banco = sequelize.define('Banco', {
    banco: DataTypes.STRING,
  });
  
  Banco.associate = function(models) {
    models.Banco.hasMany(models.BancoPlazoTasa, {
     as: 'tasas',
     foreignKey: 'bancoId'
   }); 
 };

  return Banco;
};