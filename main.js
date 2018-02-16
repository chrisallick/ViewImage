function testImage() {
	clearTimeout(t);

	$(".irc_mi").each(function(index,value) {
		if( !$(value).parents(".irc_mimg").hasClass("sup") ) {
			var el = $("<a/>").addClass("viewimage");
			$(el).css({
				width: 100,
				height: 20,
				backgroundColor: "red",
				zIndex: 100,
				position: "absolute",
				top: 20,
				left: 20,
				paddingTop: 20
			}).attr("href",$(value).attr("src")).text("view image");
			
			$(value).parents(".irc_mimg").addClass("sup").css({
				"position": "relative"
			}).append(el);
		}
	});

	t = setTimeout(testImage,1000);
}
var t;
$(document).ready(function() {
	t = setTimeout(testImage, 1000);
});