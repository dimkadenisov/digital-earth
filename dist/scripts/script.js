"use strict";

var burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function () {
  this.classList.toggle('burger-button_opened');
  document.body.classList.toggle('overflow_hidden');
  this.parentNode.querySelector('.burger-menu').classList.toggle('burger-menu_opened');
  this.parentNode.querySelector('.overlay').classList.toggle('d_none');
});

var toggleBurgerMenuTransition = function toggleBurgerMenuTransition() {
  if (window.matchMedia('(max-width: 991px)').matches) {
    document.querySelector('.burger-menu').classList.add('burger-menu_transition');
  } else {
    document.querySelector('.burger-menu').classList.remove('burger-menu_transition');
  }
};

toggleBurgerMenuTransition();
window.addEventListener('resize', toggleBurgerMenuTransition);
window.addEventListener('orientationchange', function () {
  if (window.matchMedia('(min-width: 992px)').matches && burgerButton.classList.contains('burger-button_opened')) {
    burgerButton.classList.remove('burger-button_opened');
    document.body.classList.remove('overflow_hidden');
    document.querySelector('.burger-menu_opened').classList.remove('burger-menu_opened');
    burgerButton.parentNode.querySelector('.overlay').classList.remove('d_none');
  }
});
"use strict";

var collapseHeadings = document.querySelectorAll('.collapse-heading');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

Array.prototype.forEach.call(collapseHeadings, function (heading) {
  heading.addEventListener('click', function () {
    var collapse = closest(this, '.collapse');
    collapse.classList.toggle('collapse_opened');
    var isCollapseOpened = collapse.classList.contains('collapse_opened');
    var height = isCollapseOpened ? Array.prototype.reduce.call(collapse.querySelectorAll('.collapse__inner > *'), function (acc, node) {
      console.log(node.offsetHeight);
      return acc + node.offsetHeight;
    }, 0) : 0;
    collapse.querySelector('.collapse__inner').style.maxHeight = "".concat(height, "px");
  });
});
"use strict";

document.addEventListener('scroll', function () {
  if (document.querySelector('.header:not([data-disabled])')) {
    window.pageYOffset > 1 ? document.querySelector('.header:not([data-disabled])').classList.add('header_scrolled') : document.querySelector('.header:not([data-disabled])').classList.remove('header_scrolled');
  }
});
"use strict";

var handleSelectMouseEnter = function handleSelectMouseEnter(event) {
  this.classList.add('language-select_opened'); // if (closest(event.target, '.language-select__current')) {
  // 	select.classList.toggle('language-select_opened');
  // }
  // if (closest(event.target, '.language-list .language')) {
  // 	const newLanguage = closest(event.target, '.language-list .language');
  // 	const appendTarget = newLanguage.parentNode;
  // 	const oldLanguage = select.querySelector(
  // 		'.language-select__current .language',
  // 	);
  // 	oldLanguage.parentNode.appendChild(newLanguage);
  // 	appendTarget.appendChild(oldLanguage);
  // 	select.classList.toggle('language-select_opened');
  // }
};

var handleSelectMouseLeave = function handleSelectMouseLeave(event) {
  this.classList.remove('language-select_opened');
};

Array.prototype.forEach.call(document.querySelectorAll('.language-select'), function (select) {
  select.addEventListener('mouseenter', handleSelectMouseEnter);
  select.addEventListener('mouseleave', handleSelectMouseLeave);
});
Array.prototype.forEach.call(document.querySelectorAll('.language'), function (language) {
  language.addEventListener('click', function (event) {
    if (closest(language, '.language-list')) {
      var appendTarget = language.parentNode;
      var select = closest(language, '.language-select');
      var oldLanguage = select.querySelector('.language-select__current .language');
      oldLanguage.parentNode.appendChild(language);
      appendTarget.appendChild(oldLanguage);
      select.classList.remove('language-select_opened');
      select.removeEventListener('mouseenter', handleSelectMouseEnter);
      setTimeout(function () {
        select.addEventListener('mouseenter', handleSelectMouseEnter);
      }, 200);
    }
  });
});
"use strict";

window.matchMedia('(max-width: 767px)') && document.querySelector('.ready-product') && (document.querySelector('.ready-product').innerText = 'Готовые продукты');
var mediaQuery = window.matchMedia('(max-width: 767px)');
document.querySelector('.ready-product') && mediaQuery.addListener(function (e) {
  document.querySelector('.ready-product').innerText = e.matches ? 'Готовые продукты' : 'Посмотреть готовые продукты';
});
"use strict";

function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }

  return null;
}

document.addEventListener('click', function (event) {
  var card = closest(event.target, '.service-card');

  if (card && !closest(event.target, 'a') && !closest(event.target, 'button')) {
    card.classList.toggle('service-card_opened');
    card.querySelector('.products-block').classList.toggle('products-block_column');
    Array.prototype.forEach.call(card.querySelectorAll('.products-list'), function (list) {
      list.classList.toggle('visually-hidden');
    });
    Array.prototype.forEach.call(card.querySelectorAll('.products-group'), function (group) {
      group.classList.toggle('products-group_opened');
    });
    card.querySelector('.buttons-group').classList.toggle('visually-hidden');
  }
});
"use strict";

var columns = document.querySelectorAll('.services-list__column');

var replaceCardsFromDesktop = function replaceCardsFromDesktop() {
  if (columns.length) {
    if (window.matchMedia('(max-width: 1169px) and (min-width: 768px)').matches) {
      return Array.prototype.forEach.call(columns[2].querySelectorAll('.services-list__item'), function (node, index) {
        index % 2 === 0 ? columns[0].appendChild(node) : columns[1].appendChild(node);
      });
    }

    if (window.matchMedia('(max-width: 789px)').matches) {
      Array.prototype.forEach.call(columns[1].querySelectorAll('.services-list__item'), function (node) {
        return columns[0].appendChild(node);
      });
      Array.prototype.forEach.call(columns[2].querySelectorAll('.services-list__item'), function (node) {
        return columns[0].appendChild(node);
      });
    }
  }
};

var replaceCardsFromMobile = function replaceCardsFromMobile() {
  if (columns.length) {
    if (window.matchMedia('(min-width: 1170px)').matches) {
      return Array.prototype.forEach.call(document.querySelectorAll('.services-list__item[data-column="2"]'), function (node) {
        return columns[2].appendChild(node);
      });
    }

    if (window.matchMedia('(max-width: 1169px) and (min-width: 768px)').matches) {
      Array.prototype.forEach.call(document.querySelectorAll('.services-list__item[data-column="1"]'), function (node) {
        return columns[1].appendChild(node);
      });
      Array.prototype.forEach.call(document.querySelectorAll('.services-list__item[data-column="2"]'), function (node, index) {
        index % 2 === 0 ? columns[0].appendChild(node) : columns[1].appendChild(node);
      });
    }
  }
};

replaceCardsFromDesktop();
replaceCardsFromMobile();
window.addEventListener('resize', function () {
  replaceCardsFromDesktop();
  replaceCardsFromMobile();
});
"use strict";

function addSidebarToBurgerMenu() {
  if (document.querySelector('.sidebar') && document.querySelector('.sidebar > .sidebar__inner') && window.matchMedia('(max-width: 991px)').matches) {
    document.querySelector('.burger-menu').appendChild(document.querySelector('.sidebar__inner'));
  }
}

function removeSidebarToBurgerMenu() {
  if (window.matchMedia('(min-width: 992px)').matches && document.querySelector('.sidebar') && document.querySelector('.burger-menu > .sidebar__inner')) {
    document.querySelector('.sidebar').appendChild(document.querySelector('.sidebar__inner'));
  }
}

window.addEventListener('resize', function () {
  addSidebarToBurgerMenu();
  removeSidebarToBurgerMenu();
});
addSidebarToBurgerMenu();
removeSidebarToBurgerMenu();