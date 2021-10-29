import animationOnClick from './features/animationOnClick.js';
import animationOnScroll from './features/animationOnScroll.js';
import createProjectCardList from './features/createProjectCardList.js';
import disableButtons from './features/disableButtons.js';
import hoverImg from './features/hoverImg.js';

import html from './html.js';

window.onload = () => {
  hoverImg();
  animationOnClick();
  createProjectCardList();
  disableButtons();
  window.onscroll = animationOnScroll;

  if (window.scrollY > 1220) {
    html.asidebar.style.display = 'none';
  }
};
