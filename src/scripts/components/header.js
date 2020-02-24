document.addEventListener('scroll', () =>
	window.pageYOffset > 1
		? document.querySelector('.header').classList.add('header_scrolled')
		: document.querySelector('.header').classList.remove('header_scrolled'),
);
