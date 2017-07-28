$("#startBTN").on("click", function() {
	$("#startBTN").hide();
	$("#triviaQs").removeClass("hidden");
});

$("#submitBTN").on("click", function() {
	$("#submitBTN").hide();
	$("#triviaQs").hide();
	$("#results").removeClass("hidden");
});