const columns = document.querySelectorAll('.services-list__column');

const replaceCardsFromDesktop = () => {
	if (columns.length) {
		if (
			window.matchMedia('(max-width: 1169px) and (min-width: 768px)').matches
		) {
			return Array.prototype.forEach.call(
				columns[2].querySelectorAll('.services-list__item'),
				(node, index) => {
					index % 2 === 0
						? columns[0].appendChild(node)
						: columns[1].appendChild(node);
				},
			);
		}
		if (window.matchMedia('(max-width: 789px)').matches) {
			Array.prototype.forEach.call(
				columns[1].querySelectorAll('.services-list__item'),
				node => columns[0].appendChild(node),
			);
			Array.prototype.forEach.call(
				columns[2].querySelectorAll('.services-list__item'),
				node => columns[0].appendChild(node),
			);
		}
	}
};

const replaceCardsFromMobile = () => {
	if (columns.length) {
		if (window.matchMedia('(min-width: 1170px)').matches) {
			return Array.prototype.forEach.call(
				document.querySelectorAll('.services-list__item[data-column="2"]'),
				node => columns[2].appendChild(node),
			);
		}
		if (
			window.matchMedia('(max-width: 1169px) and (min-width: 768px)').matches
		) {
			Array.prototype.forEach.call(
				document.querySelectorAll('.services-list__item[data-column="1"]'),
				node => columns[1].appendChild(node),
			);
			Array.prototype.forEach.call(
				document.querySelectorAll('.services-list__item[data-column="2"]'),
				(node, index) => {
					index % 2 === 0
						? columns[0].appendChild(node)
						: columns[1].appendChild(node);
				},
			);
		}
	}
};

replaceCardsFromDesktop();
replaceCardsFromMobile();

window.addEventListener('resize', () => {
	replaceCardsFromDesktop();
	replaceCardsFromMobile();
});
