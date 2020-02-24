document.querySelector('.burger-button').addEventListener('click', function() {
	this.parentNode
		.querySelector('.burger-menu')
		.classList.toggle('burger-menu_opened');
});
