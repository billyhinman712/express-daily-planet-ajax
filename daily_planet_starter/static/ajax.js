$(document).ready(function(){

	$("#delete-btn").on(click, function(e){
		e.preventDefault();
		var url = $(this).attr("href");

		$.ajax({
			method: "DELETE",
			url: url,
		}).done(function(data){
			window.location = "/articles";
		}).fail(function(err){
			console.log("error", err);
		});//end ajx delete
	});
});