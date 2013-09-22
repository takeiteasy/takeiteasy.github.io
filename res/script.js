function init() {
	// Show the hover menu
	$(function() {
		$(".menu_item").hover(function() {
			$("#" + $(this).attr("id") + "_box").stop().animate({ 'margin-top': '50%' }, 'fast').fadeIn('fast').dequeue();
		}, function() {
			$("#" + $(this).attr("id") + "_box").stop().animate({ 'margin-top': '0%' }, 'fast').fadeOut('fast').dequeue();
		});
	});
	
	// Mouse-over image swap
	$(function() {
		$(".menu_img").mouseover(function() { 
			var src = $(this).attr("src");
			$(this).attr("src", src.match(/[^\.]+/) + "_over" + src.match(/(\.[^.]+)$/)[0]);
		}).mouseout(function() {
			$(this).attr("src", $(this).attr("src").replace("_over", ""));
		});
	});
}