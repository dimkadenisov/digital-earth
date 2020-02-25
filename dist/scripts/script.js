"use strict";

document.querySelector('.burger-button').addEventListener('click', function () {
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
"use strict";

var collapseHeadings = document.querySelectorAll('.collapse-heading');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

Array.prototype.forEach.call(collapseHeadings, function (heading) {
  heading.addEventListener('click', function () {
    var collapse = closest(this, '.collapse');
    var collapseInner = collapse.querySelector('.collapse__inner');
    collapse.classList.toggle('collapse_opened');
    var isCollapseOpened = collapse.classList.contains('collapse_opened');
    var height = isCollapseOpened ? Array.prototype.reduce.call(collapse.querySelectorAll('.collapse__inner > *'), function (acc, node) {
      return acc + node.offsetHeight;
    }, 0) : 0;
    collapse.querySelector('.collapse__inner').style.maxHeight = "".concat(height, "px");
  });
});
"use strict";

document.addEventListener('scroll', function () {
  return window.pageYOffset > 1 ? document.querySelector('.header:not([data-disabled])').classList.add('header_scrolled') : document.querySelector('.header:not([data-disabled])').classList.remove('header_scrolled');
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