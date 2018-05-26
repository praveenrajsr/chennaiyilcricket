jQuery(document).ready(function($){
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
	//select a new section

	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}
});

// split screen effect

document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;  //to grab the mouse Position

	if(wrapper.className.indexOf('skewed') != -1){
		skew = 1000;
	}
	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		topLayer.style.width = e.clientX + skew + delta + 'px';
	});
});

// smooth scroll
$(document).ready(function(){

	var scrollLink = $('.scroll');

	//smooth scrolling
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000)
	});

	//active link switch

	$(window).scroll(function(){
		
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function(){

			var sectionOffset = $(this.hash).offset().top -20;

			if(sectionOffset <= scrollbarLocation){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});	

});

$(document).ready(function(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 5,
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		lazyLoad: true,
		responsive: {
			0:{
				items: 3,
				nav: true,
				autoplay: true,
			},
			600:{
				items: 3,
				nav: false,
				autoplay: true,
			},
			1000: {
				items: 5,
				nav: true,
				loop: true,
				autoplay: true,
			},
			1024: {
				items: 5,
				nav: true,
				loop: true,
				autoplay: true,
			},
		}
	});
});