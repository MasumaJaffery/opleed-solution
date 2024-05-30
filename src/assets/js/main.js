(function ($) {
	"use strict";

	/*------------------------------------
			Preloader
		--------------------------------------*/

	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	});



	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});


	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	// $(".mobile-menu-active li").on("click", function (e) {
	// 	e.preventDefault();
	// 	$(".slide-bar").removeClass("show");
	// });

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

	/* Search
		-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({
			opacity: 'toggle'
		}, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({
			opacity: 'toggle'
		}, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});



	//sticky-menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".main-header-area").removeClass("sticky-menu");
		} else {
			$(".main-header-area").addClass("sticky-menu");
		}
	});




	$('.sliders-active').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: false,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		mouseDrag: false,
		autoplay: true,
		animateIn: 'fadeIn',
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
			},
			1000: {
				items: 1,
				nav: false,
			},
			1200: {
				items: 1
			}
		}
	});

	// services-slide
	$('.services-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 3.5,
		autoplay: true,
		autoplaySpeed: 2000,
		nav: false,
		dots: false,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			980: {
				items: 3,
			},
			1200: {
				items: 3.75,
			},
		}
	})





	// brand-slide
	$('.brand-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		nav: false,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				center: false,
			},
			321: {
				items: 2,
				center: false,
			},
			500: {
				items: 3,
			},
			769: {
				items: 4,
			},
			992: {
				items: 5,
			},
		}
	})
	// brand-slide2
	$('.brand-slide2').owlCarousel({
		loop: true,
		margin: 30,
		items: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		nav: false,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				center: false,
			},
			351: {
				items: 2,
				margin: 0,
				center: false,
			},
			
			577: {
				items: 3,
			},
			769: {
				items: 3,
			},
			992: {
				items: 5,
			},
		}
	})



	// portfolio-slide
	$('.portfolio-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
				center: false
			},
			1024: {
				items: 3,
				center: false
			},
			1200: {
				items: 3,
			}
		}
	})
	// portfolio-slide2
	$('.portfolio-slide2').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
				center: false
			},
			991: {
				items: 2,
				center: false
			},
			1200: {
				items: 3,
			}
		}
	})



	// blog-slide
	$('.blog-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false
			},
			500: {
				items: 2,
				nav: false
			},
			800: {
				items: 3,
			},
			1024: {
				items: 4,
			}
		}
	})



	// cases-slide
	$('.cases-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			880: {
				items: 3,
			},
			1024: {
				items: 4,
			},
			1199: {
				items: 4,
			},
			1699: {
				items: 5.5,
			}
		}
	})


	// cases-slide2
	$('.cases-slide2').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			500: {
				items: 2,
			},
			880: {
				items: 3,
			},
			1199: {
				items: 4,
			}
		}
	})


	// testimonial-slide2
	$('.testimonial-slide2').owlCarousel({
		loop: true,
		margin: 40,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				center: false,
				nav: false,
			},
			600: {
				items: 2,
				center: false,
			},
			992: {
				items: 2,
				center: false,
			},
			1199: {
				items: 3,
			}
		}
	})

	// testimonial-slide3
	$('.testimonial-slide3').owlCarousel({
		loop: true,
		margin: 40,
		items: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				center: false,
				nav: false,
			},
			600: {
				items: 1,
				center: false,
			},
			992: {
				items: 1,
				center: false,
			},
			1199: {
				items: 1,
			}
		}
	})


	// testimonial-slide4
	$('.testimonial-slide4').owlCarousel({
		loop: true,
		margin: 40,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				center: false,
				nav: false,
			},
			601: {
				items: 2,
				center: false,
			},
			768: {
				items: 2,
				center: false,
			},
			992: {
				items: 3,
				center: false,
			},
			1199: {
				items: 3,
			}
		}
	})

	// testimonial-slide5
	$('.testimonial-slide5').owlCarousel({
		loop: true,
		margin: 20,
		items: 3,
		autoplay: false,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1,
				center: false,
				nav: false,
			},
			601: {
				items: 2,
				center: false,
			},
			768: {
				items: 2,
				center: false,
			},
			992: {
				items: 2,
				center: false,
			},
			1199: {
				items: 3,
			}
		}
	})


	// portfolio-active2
	$('.portfolio-active2').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,

			},
			992: {
				items: 3,
			}
		}
	})
	// portfolio-active2
	$('.team-slide').owlCarousel({
		loop: true,
		margin: 30,
		items: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots:true,
			},
			600: {
				items: 2,
				dots:true,

			},
			992: {
				items: 3,
				dots:true,
			},
			1200: {
				items: 4,
				dots:true,
			}
		}
	})


	// blog-active
	$('.blog-img-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nav: true,
		dots: false,
		navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false
			},
			600: {
				items: 1,
			},
			980: {
				items: 1,
			}
		}
	})


	// -------------------- price btn
	$(".price-btn").click(function () {

		var lable = $(".price-btn").text().trim();

		if (lable == "Monthly") {
			$(".price-btn").text("Yearly");
			$(".yearly-price").show();
			$(".monthly-price").hide();
		} else {
			$(".price-btn").text("Monthly");
			$(".monthly-price").show();
			$(".yearly-price").hide();
		}

	});




	// -------------------- Remove Placeholder When Focus Or Click
	$("input,textarea").each(function () {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).on('focusin', function () {
			$(this).attr('placeholder', '');
		});
		$(this).on('focusout', function () {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});


	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 0,
				gutter: 0
			}
		});
		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});


	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 500, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 300, // Animation in speed (ms)
		animationOutSpeed: 300, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


	// wow animation - start
	// --------------------------------------------------
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init()
	}
	wowAnimation();



	//nice-select
	$(document).ready(function () {
		$('select').niceSelect();
	});

	jQuery(function ($) {
		var topMenuHeight = $("#navbar-nav").outerHeight();
		$("#navbar-nav").menuScroll(topMenuHeight);
	});

	// COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
	jQuery.fn.extend({
		menuScroll: function (offset) {
			// Declare all global variables
			var topMenu = this;
			var topOffset = offset ? offset : 0;
			var menuItems = $(topMenu).find("a");
			var lastId;

			// Save all menu items into scrollItems array
			var scrollItems = $(menuItems).map(function () {
				var item = $($(this).attr("href"));
				if (item.length) {
					return item;
				}
			});
		}
	});



	
	

// onepage-scroll
var singlepage = $('.single-page-nav');

if(singlepage.length) {
	$('.single-page-nav').singlePageNav({
	offset: $('.single-page-nav').outerHeight(),
	threshold: 120,
	speed: 400,
	currentClass: 'current',
	easing: 'swing',
	filter: ':not(.external)',
	onComplete: function() {
	console.log('done scrolling');
	}
	});
}
// slidebar hide
$(".onepage-side-mobile-menu a").on("click", function () {
	$(".slide-bar").removeClass("show");
	$(".body-overlay").removeClass("active");
});




})(jQuery);