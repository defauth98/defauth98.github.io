import html from '../html.js';

function animationOnClick() {
  html.skillAnchor.addEventListener('click', () => {
    html.skillsList.style.animationPlayState = 'running';

    html.skillsTitle.style.animationPlayState = 'running';
  });
}

export default animationOnClick;
