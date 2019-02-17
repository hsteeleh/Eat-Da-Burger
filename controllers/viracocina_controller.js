// nside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (Viracocina.js) to use its database functions.
var Viracocina = require('../models/Viracocina.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  Viracocina.selectAll(function(data) {
    var hbsObject = {
      Viracocinas: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/Viracocinas', function(req, res) {
  Viracocina.insertOne([
    'Viracocina_name'
  ], [
    req.body.Viracocina_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/Viracocinas/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  Viracocina.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
