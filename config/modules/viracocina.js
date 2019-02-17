// Inside viracocina.js, import orm.js into viracocina.js

// Also inside viracocina.js, create the code that will call the ORM functions using viracocina specific input for the ORM.
// Export at the end of the viracocina.js file.

// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the comida object
var comida = {
  // Select all comida table entries
  selectAll: function(cb) {
    orm.selectAll('comidas', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('comidas', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('comidas', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (comidaController.js).
module.exports = comida;
