const collapseHeadings = document.querySelectorAll('.collapse-heading');

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

Array.prototype.forEach.call(collapseHeadings, heading => {
	heading.addEventListener('click', function() {
		const collapse = closest(this, '.collapse');
		collapse.classList.toggle('collapse_opened');
		const isCollapseOpened = collapse.classList.contains('collapse_opened');

		const height = isCollapseOpened
			? Array.prototype.reduce.call(
					collapse.querySelectorAll('.collapse__inner > *'),
					(acc, node) => acc + node.offsetHeight,
					0,
			  )
			: 0;
		collapse.querySelector('.collapse__inner').style.maxHeight = `${height}px`;
	});
});
