var orm = require("../config/orm.js");

var burger = {

	selectAll: function(cb) {

		orm.selectAll("burgers", function(res) {

			cb(res);

		});

	},

	insertOne: function(col1, col2, val, cb) {

		console.log("Speaking to ORM");

		orm.insertOne("burgers", col1, col2, val, function(res) {

			console.log("Heard from ORM, result below");

			console.log(res);

			cb(res);

		});

	},

	updateOne: function(condition, cb) {

		console.log("Speaking to ORM");

		orm.updateOne("burgers", "devoured = true", condition, function(res) {

			console.log("Heard from ORM, result below");

			console.log(res);

			cb(res);

		});

	}

};

module.exports = burger;