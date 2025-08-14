$(document).ready(function () {
	
	// Mobile Nav toggle
	$('#iconMenu').click(function() {
		$(this).toggleClass('close');
		$('nav').slideToggle('fast');
	});
	
	// Sticky Header on Scroll
	$(document).ready(function () {
		(function() {
		  $(function() {
			var $document, didScroll, offset;
			offset = $('header').position().top;
			$document = $(document);
			didScroll = false;
			$(window).on('scroll touchmove', function() {
			  return didScroll = true;
			});
			return setInterval(function() {
			  if (didScroll) {
				$('header').toggleClass('fixed', $document.scrollTop() > offset + 1);
				return didScroll = false;
			  }
			}, 10);
		  });
		
		}).call(this);
	});
	
	// FAQs
	$('.faq_question').click(function() {
		$(this).parent().toggleClass('active');
		$(this).next().slideToggle('fast');
	});
	
	// Support
	$('.supportTitle').click(function() {
		$(this).parent().toggleClass('active');
		$(this).next().slideToggle('fast');
	});
	
	// Slides

	  $('.slides').slick({
		infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  initialSlide: 1,
		  centerMode: true,
		  centerPadding: '0px',
		  nextArrow: '<button type="button" class="slick-next"></button>',
		  prevArrow: '<button type="button" class="slick-prev"></button>',
		  responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
	  ]
	  });
	  
	// Feature Slides Click
	$('.allinone_tile_hover').click(function() {
		$(this).toggleClass('active');
	});    

	
});