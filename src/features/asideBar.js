import html from '../html.js';

function hideAsideBar() {
  html.asidebar.style.display = 'none';
}

function showAsidebar() {
  html.asidebar.style.display = 'flex';
}

export { hideAsideBar, showAsidebar };
