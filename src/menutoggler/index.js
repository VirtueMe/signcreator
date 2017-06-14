import { add, has, remove } from 'dom-classes';

const ClassName = {
  SHOW       : 'show',
  COLLAPSE   : 'collapse',
  COLLAPSING : 'collapsing',
  COLLAPSED  : 'collapsed'
};

/*
const Dimension = {
  WIDTH  : 'width',
  HEIGHT : 'height'
};
*/

const Selector = {
  ACTIVES     : '.show, .collapsing',
  DATA_TOGGLE : '[data-toggle="collapse"]'
};

function show(element, menu) {
  add(menu, ClassName.COLLAPSING);
  remove(menu, ClassName.COLLAPSE);
  remove(menu, ClassName.SHOW);

  remove(element, ClassName.COLLAPSED);
  element.setAttribute('aria-expanded', true);

  remove(menu, ClassName.COLLAPSING);
  add(menu,ClassName.COLLAPSE);
  add(menu, ClassName.SHOW);
}

function hide(element, menu) {
  add(menu, ClassName.COLLAPSING);
  remove(menu, ClassName.COLLAPSE);
  remove(menu, ClassName.SHOW);

  add(element, ClassName.COLLAPSED);
  element.setAttribute('aria-expanded', false);

  remove(menu, ClassName.COLLAPSING);
  add(menu,ClassName.COLLAPSE);
}

function toggle(element, menu) {
  if (has(menu, ClassName.SHOW)) {
    hide(element, menu);
  } else {
    show(element, menu);
  }
}

function startTrigger() {
  const element = document.querySelector(Selector.DATA_TOGGLE);


  if (element) {
    const menu = document.querySelector(element.getAttribute('data-target'));

    element.onclick = (event) => {
      event.preventDefault();
      toggle(element, menu);
    };
  }
}

export default startTrigger;

export {
  startTrigger
};
