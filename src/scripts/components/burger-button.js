const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function() {
	this.classList.toggle('burger-button_opened');
	document.body.classList.toggle('overflow_hidden');
	this.parentNode
		.querySelector('.burger-menu')
		.classList.toggle('burger-menu_opened');
	this.parentNode.querySelector('.overlay').classList.toggle('d_none');
	if (this.classList.contains('burger-button_opened')) {
		window.addEventListener('resize', toggleBurgerMenuOnResize);
	} else {
		window.removeEventListener('resize', toggleBurgerMenuOnResize);
	}
});

const toggleBurgerMenuTransition = () => {
	if (window.matchMedia('(max-width: 991px)').matches) {
		document
			.querySelector('.burger-menu')
			.classList.add('burger-menu_transition');
	} else {
		document
			.querySelector('.burger-menu')
			.classList.remove('burger-menu_transition');
	}
};

toggleBurgerMenuTransition();

window.addEventListener('resize', toggleBurgerMenuTransition);

window.addEventListener('orientationchange', () => {
	if (
		burgerButton.classList.contains('burger-button_opened') &&
		Math.abs(window.orientation) === 90 &&
		screen.availHeight > 991
	) {
		burgerButton.classList.remove('burger-button_opened');
		document.body.classList.remove('overflow_hidden');
		document
			.querySelector('.burger-menu_opened')
			.classList.remove('burger-menu_opened');
		burgerButton.parentNode.querySelector('.overlay').classList.add('d_none');
	}
});

function toggleBurgerMenuOnResize() {
	if (
		window.matchMedia('(min-width: 992px)').matches &&
		burgerButton.classList.contains('burger-button_opened')
	) {
		burgerButton.classList.remove('burger-button_opened');
		document.body.classList.remove('overflow_hidden');
		burgerButton.parentNode
			.querySelector('.burger-menu')
			.classList.remove('burger-menu_opened');
		burgerButton.parentNode.querySelector('.overlay').classList.add('d_none');
	}
}
