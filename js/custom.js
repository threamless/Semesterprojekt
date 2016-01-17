//Zum Highliten der News über die gerade die Maus zeigt
$(document).ready(function(){

	$(".news-entry").on("mouseenter", function(){
		$(this).addClass("news-entry-highlite");

	});

	$(".news-entry").on("mouseleave", function(){
		$(this).removeClass("news-entry-highlite");
	});	

});