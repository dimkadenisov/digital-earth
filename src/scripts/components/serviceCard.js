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

	if (card) {
		if (window.NodeList && !NodeList.prototype.forEach) {
			NodeList.prototype.forEach = Array.prototype.forEach;
		}
		card.classList.toggle('service-card_opened');
		card
			.querySelector('.products-block')
			.classList.toggle('products-block_column');
		card.querySelectorAll('.products-list').forEach(list => {
			list.classList.toggle('visually-hidden');
		});
		card.querySelectorAll('.products-group').forEach(group => {
			group.classList.toggle('products-group_opened');
		});
		card.querySelector('.buttons-group').classList.toggle('visually-hidden');
	}
});
