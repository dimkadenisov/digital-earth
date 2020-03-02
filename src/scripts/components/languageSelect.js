Array.prototype.forEach.call(
	document.querySelectorAll('.language-select'),
	select => {
		select.addEventListener('click', function(event) {
			if (closest(event.target, '.language-select__current')) {
				select.classList.toggle('language-select_opened');
			}

			if (closest(event.target, '.language-list .language')) {
				const newLanguage = closest(event.target, '.language-list .language');
				const appendTarget = newLanguage.parentNode;
				const oldLanguage = select.querySelector(
					'.language-select__current .language',
				);
				oldLanguage.parentNode.appendChild(newLanguage);
				appendTarget.appendChild(oldLanguage);
				select.classList.toggle('language-select_opened');
			}
		});
	},
);
