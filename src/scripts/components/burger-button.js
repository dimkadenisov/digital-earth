document.querySelector('.burger-button').addEventListener('click', function() {
	this.classList.toggle('burger-button_opened');
	document.body.classList.toggle('overflow_hidden');
	this.parentNode
		.querySelector('.burger-menu')
		.classList.toggle('burger-menu_opened');
	this.parentNode.querySelector('.overlay').classList.toggle('d_none');
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
