"use strict";

document.querySelector('.burger-button').addEventListener('click', function () {
  this.parentNode.querySelector('.burger-menu').classList.toggle('burger-menu_opened');
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var collapseHeadings = document.querySelectorAll('.collapse-heading');

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

collapseHeadings.forEach(function (heading) {
  heading.addEventListener('click', function () {
    var collapse = closest(this, '.collapse');
    collapse.classList.toggle('collapse_opened');
    var isCollapseOpened = collapse.classList.contains('collapse_opened');
    var height = isCollapseOpened ? _toConsumableArray(collapse.querySelectorAll('.collapse__inner > *')).reduce(function (acc, node) {
      return acc + node.offsetHeight;
    }, 0) : 0;
    collapse.querySelector('.collapse__inner').style.maxHeight = "".concat(height, "px");
  });
});
"use strict";

document.addEventListener('scroll', function () {
  return window.pageYOffset > 1 ? document.querySelector('.header').classList.add('header_scrolled') : document.querySelector('.header').classList.remove('header_scrolled');
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

  if (card) {
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    card.classList.toggle('service-card_opened');
    card.querySelector('.products-block').classList.toggle('products-block_column');
    card.querySelectorAll('.products-list').forEach(function (list) {
      list.classList.toggle('visually-hidden');
    });
    card.querySelectorAll('.products-group').forEach(function (group) {
      group.classList.toggle('products-group_opened');
    });
    card.querySelector('.buttons-group').classList.toggle('visually-hidden');
  }
});
"use strict";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var columns = document.querySelectorAll('.services-list__column');

var replaceCardsFromDesktop = function replaceCardsFromDesktop() {
  if (columns.length) {
    if (window.matchMedia('(max-width: 1169px) and (min-width: 790px)').matches) {
      return columns[2].querySelectorAll('.services-list__item').forEach(function (node, index) {
        index % 2 === 0 ? columns[0].appendChild(node) : columns[1].appendChild(node);
      });
    }

    if (window.matchMedia('(max-width: 789px)').matches) {
      columns[1].querySelectorAll('.services-list__item').forEach(function (node) {
        return columns[0].appendChild(node);
      });
      columns[2].querySelectorAll('.services-list__item').forEach(function (node) {
        return columns[0].appendChild(node);
      });
    }
  }
};

var replaceCardsFromMobile = function replaceCardsFromMobile() {
  if (columns.length) {
    if (window.matchMedia('(min-width: 1170px)').matches) {
      return document.querySelectorAll('.services-list__item[data-column="2"]').forEach(function (node) {
        return columns[2].appendChild(node);
      });
    }

    if (window.matchMedia('(max-width: 1169px) and (min-width: 790px)').matches) {
      document.querySelectorAll('.services-list__item[data-column="1"]').forEach(function (node) {
        return columns[1].appendChild(node);
      });
      document.querySelectorAll('.services-list__item[data-column="2"]').forEach(function (node, index) {
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