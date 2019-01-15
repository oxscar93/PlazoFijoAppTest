module.exports = function(app) {

    // plazoController
    var plazoController = require('../controllers/plazo.controller');
  
    app.route('/calculate-plazo')
      .post(plazoController.calculatePlazo)

    // bancoController
    var bancoController = require('../controllers/banco.controller');

    app.route('/get-banco-tasa-list')
    .get(bancoController.getBancoTasaList)

    app.route('/get-banco-list')
    .get(bancoController.getBancoList)

    app.route('/get-plazo-list/:bancoId')
    .get(bancoController.getPlazoList)
};