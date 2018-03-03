$(document).ready(function() {

	$(".form__submit-btn").on("click", function(e) {

		e.preventDefault();

		var newBurger = {

			burger: $("#form__user-input").val().trim()
		
		};

		console.log(newBurger);

		$.ajax("/api/burgers", {

			type: "POST",
			data: newBurger

		}).then(function(data) {

			console.log("Received result from the burgers controller, result below");

			console.log(data);

			location.reload();

		});

	});

	$(".munch-btn").on("click", function() {

		var id = $(this).data("id");

		console.log("This button's id is" + id);

		$.ajax("/api/burgers/" + id, {

	      type: "PUT",
	      data: id

	    }).then(function(data) {

	    	console.log("Heard back from burger.js, record was updated, result is below");

	    	console.log(data);

	        location.reload();

	    });
	
	});

});