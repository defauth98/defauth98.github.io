import html from '../html.js';

function hoverImg() {
  html.aboutContainer.addEventListener('mouseenter', () => {
    html.aboutImg.style.display = 'none';
    html.aboutText.style.display = 'block';
    html.aboutText.style.animation = 'move 1s';
    html.aboutImg.style.animation = 'backMove 1.5s';
  });

  html.aboutContainer.addEventListener('mouseleave', () => {
    html.aboutImg.style.display = 'block';
    html.aboutText.style.display = 'none';
  });

  html.skillContainer.addEventListener('mouseenter', () => {
    html.skillImg.style.display = 'none';
    html.skillText.style.display = 'block';
    html.skillText.style.animation = 'move 1s';
    html.skillImg.style.animation = 'backMove 1.5s';
  });

  html.skillContainer.addEventListener('mouseleave', () => {
    html.skillImg.style.display = 'block';
    html.skillText.style.display = 'none';
  });

  html.blogContainer.addEventListener('mouseenter', () => {
    html.blogImg.style.display = 'none';
    html.blogText.style.display = 'block';
    html.blogText.style.animation = 'move 1s';
    html.blogImg.style.animation = 'backMove 1.5s';
  });

  html.blogContainer.addEventListener('mouseleave', () => {
    html.blogImg.style.display = 'block';
    html.blogText.style.display = 'none';
  });
}

export default hoverImg;
