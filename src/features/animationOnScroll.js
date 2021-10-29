import { hideAsideBar, showAsidebar } from './asideBar.js';

function animationOnScroll() {
  const titleElement = document.querySelector('#section-skills h2');
  const listElement = document.querySelector('#section-skills ul');
  const scrollY = window.scrollY;

  if (scrollY > 600) {
    titleElement.style.animationPlayState = 'running';
    listElement.style.animationPlayState = 'running';
  }

  if (scrollY > 1220) {
    hideAsideBar();
  }

  if (scrollY < 1220) {
    showAsidebar();
  }
}

export default animationOnScroll;
