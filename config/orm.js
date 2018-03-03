var connection = require("./connection.js");

var orm = {

	selectAll: function(table, cb) {

		var queryString = "SELECT * FROM ";
		queryString += table;

		connection.query(queryString, function(err, result) {

			cb(result);

		});

	},

	insertOne: function(table, col1, col2, val, cb) {

		var queryString = "INSERT INTO ";
		queryString += table;
		queryString += " ("
		queryString += col1;
		queryString += ", ";
		queryString += col2;
		queryString += ") VALUES ('";
		queryString += val
		queryString += "', false)";

		connection.query(queryString, function(err, result) {

			"Tyring to add to database";

			if (err) throw err;

			console.log("Result from database below");

			console.log(result);

			cb(result);

		});

	},

	updateOne: function(table, change, condition, cb) {

		console.log("Heard from burger.js, trying to update table witht the query string below");

		var queryString = "UPDATE ";
		queryString += table;
		queryString += " SET ";
		queryString += change;
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {

			if (err) throw err;

			console.log("Updated database, result below");

			console.log(result);

			cb(result);

		});

	}

};

module.exports = orm;