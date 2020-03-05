const handleSelectMouseEnter = function(event) {
	this.classList.add('language-select_opened');
};
const handleSelectMouseLeave = function(event) {
	this.classList.remove('language-select_opened');
};

Array.prototype.forEach.call(
	document.querySelectorAll('.language-select'),
	select => {
		select.addEventListener('mouseenter', handleSelectMouseEnter);
		select.addEventListener('mouseleave', handleSelectMouseLeave);
	},
);

Array.prototype.forEach.call(
	document.querySelectorAll('.language'),
	language => {
		language.addEventListener('click', function(event) {
			if (closest(language, '.language-list')) {
				const appendTarget = language.parentNode;
				const select = closest(language, '.language-select');
				const oldLanguage = select.querySelector(
					'.language-select__current .language',
				);
				oldLanguage.parentNode.appendChild(language);
				appendTarget.appendChild(oldLanguage);
				select.classList.remove('language-select_opened');
				select.removeEventListener('mouseenter', handleSelectMouseEnter);
				setTimeout(() => {
					select.addEventListener('mouseenter', handleSelectMouseEnter);
				}, 200);
			}
		});
	},
);
