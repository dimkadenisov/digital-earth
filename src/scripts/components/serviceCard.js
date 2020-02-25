function closest(el, selector) {
	const matchesSelector =
		el.matches ||
		el.webkitMatchesSelector ||
		el.mozMatchesSelector ||
		el.msMatchesSelector;

	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		} else {
			el = el.parentElement;
		}
	}
	return null;
}

document.addEventListener('click', event => {
	const card = closest(event.target, '.service-card');

	if (card && !closest(event.target, 'a') && !closest(event.target, 'button')) {
		card.classList.toggle('service-card_opened');
		card
			.querySelector('.products-block')
			.classList.toggle('products-block_column');
		Array.prototype.forEach.call(
			card.querySelectorAll('.products-list'),
			list => {
				list.classList.toggle('visually-hidden');
			},
		);
		Array.prototype.forEach.call(
			card.querySelectorAll('.products-group'),
			group => {
				group.classList.toggle('products-group_opened');
			},
		);
		card.querySelector('.buttons-group').classList.toggle('visually-hidden');
	}
});
