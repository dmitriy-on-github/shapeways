
window.onload = function () {
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
	}
}

// Swiper
const swiper = new Swiper('.slider__swiper', {
	//observer: true,
	//observeParents: true,
	slidesPerView: 3,
	spaceBetween: 50,
	//autoHeight: true,
	speed: 800,
	//parallax: true,
	//mousewheel: true,
	keyboard: true,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	/*
	//Dotts
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	*/
	//Arrows
	navigation: {
		nextEl: '.slider__arrow_right',
		prevEl: '.slider__arrow_left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
		},
		479: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		650: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
/*
window.onload = function (){
	document.addEventListener("click", documentActions);

	function documentActions(e){
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()){
			if (targetElement.classList.contains('menu__arrow')){
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0){
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
		if (targetElement.classList.contains('search-form__icon')){
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')){
			document.querySelector('.search-form').classList.remove('_active');
		}
	}
}

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('._ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();


	// Header
	const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
*/