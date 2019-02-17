// Import the ORM and connection objects
var orm = require ('./orm.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require ('./connection.js');

// Select all entries from the database
orm.selectAll('viracocina', function (data) {
	console.log('orm.selectAll test...\n\n');

	console.log('__________Comida__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Comida ID = ' + data[i].id);
		console.log('Comida Name = ' + data[i].Comida_name);
		console.log('Available = ' + data[i].devoured);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
orm.insertOne('viracocina', 
	         ['Comida_name', 'devoured'], 
	         ['Success Story Mushroom Double-Stack Comida', false], 
	         function (data) {
	console.log('\n\norm.insertOne test...\n\n');

	console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
});

// Update a single entry in the database
orm.updateOne('viracocina', {devoured: true}, 'id = 7', function (data) {
	console.log('\n\norm.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
