const collapseHeadings = document.querySelectorAll('.collapse-heading');

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

collapseHeadings.forEach(heading => {
	heading.addEventListener('click', function() {
		const collapse = closest(this, '.collapse');
		collapse.classList.toggle('collapse_opened');

		const isCollapseOpened = collapse.classList.contains('collapse_opened');

		const height = isCollapseOpened
			? [...collapse.querySelectorAll('.collapse__inner > *')].reduce(
					(acc, node) => acc + node.offsetHeight,
					0,
			  )
			: 0;
		collapse.querySelector('.collapse__inner').style.maxHeight = `${height}px`;
	});
});
