var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

	burger.selectAll(function(data) {

		var hbsObject = {

			"burgers": data

		};

		res.render("index", hbsObject);

	});

});

router.post("/api/burgers", function(req, res) {

  console.log("Insert one attempt");

	burger.insertOne("burger_name", "devoured", req.body.burger, function(result) {

    console.log("Heard from burger.js, result below");

    console.log(result);

    console.log("Sending the result as the res back to the client-side js");

    res.json(result);

	});

});

router.put("/api/burgers/:id", function(req, res) {
  
  var condition = "id = " + req.params.id;

  console.log("Trying to update a record (put request) with the condition below");

  console.log("condition", condition);

  burger.updateOne(condition, function(result) {

    console.log("Heard from burger.js, record was updated, result below");

    console.log(result);

    console.log("Sending the result as a res back to the client-side js");

    res.json(result);
  	
  });
});

module.exports = router;