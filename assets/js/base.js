/**
 * File base.js.
 *
 * Theme functions.
 */

/*===================================
=            MIN SCRIPTS            =
===================================*/



/*===========================
=            NAV            =
===========================*/

(function($){

    $('.hamburger').on('click', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('is-active');
    });
	
})(jQuery);

/*===================================
=            SVG REPLACE            =
===================================*/

(function($){

    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
	
})(jQuery);

/*==============================
=            LOADER            =
==============================*/

(function($){

	function id(v){ return document.getElementById(v); }
	function loadbar() {
		var ovrl = id("loader"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0,
			tot = img.length;
		if(tot == 0) return doneLoading();

		function imgLoaded(){
			c += 1;
			var perc = ((100/tot*c) << 0) +"%";
			prog.style.width = perc;
			stat.innerHTML = "Loading "+ perc;
			if(c===tot) return doneLoading();
		}
		function doneLoading(){
			ovrl.style.opacity = 0;
			setTimeout(function(){ 
				ovrl.style.display = "none";
			}, 1200);
		}
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
			tImg.onload  = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src     = img[i].src;
		}
	}
	document.addEventListener('DOMContentLoaded', loadbar, false);

})(jQuery);

/*===============================
=            HEADER             =
===============================*/

(function($) {

	var $document = $(document),
	$element = $('#masthead'),
	header = $('#masthead');

	$document.scroll(function() {
		$element.toggleClass('hidden', $document.scrollTop() >= 99);
	});

	$document.scroll(function() {
		//$element.toggleClass('fixed', $document.scrollTop() >= $(window).height());
		$element.toggleClass('fixed', $document.scrollTop() >= 400);
	});

})(jQuery);

/*===============================
=            BANNER             =
===============================*/

// (function($) {

// 	$('#banner .table').each(function(){
// 		var headerHeight = $('#masthead').height();
// 		$(this).css('padding-top', headerHeight+'px');
// 	});

// })(jQuery);

/*===================================
=            ORIENTATION            =
===================================*/

// jQuery(window).on("orientationchange",function($){
// 	if(window.orientation == 0) // Portrait
// 	{
// 		$('#turnme').removeClass('show');
// 		$('body').removeClass('disablescroll');
// 	}
// 	else // Landscape
// 	{
// 		$('#turnme').addClass('show');
// 		$('body').addClass('disablescroll');
// 	}
// });