const html = {
  aboutContainer: document.querySelector('#about-container'),
  aboutImg: document.querySelector('#about-img'),
  aboutText: document.querySelector('#about-text'),

  skillContainer: document.querySelector('#skill-container'),
  skillImg: document.querySelector('#skill-img'),
  skillText: document.querySelector('#skill-text'),

  blogContainer: document.querySelector('#blog-container'),
  blogImg: document.querySelector('#blog-img'),
  blogText: document.querySelector('#blog-text'),

  skillAnchor: document.querySelector('#skill-anchor'),
  skillsTitle: document.querySelector('#my-skills'),
  skillsList: document.querySelector('#skills-list'),
};

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

function animationOnClick(){
  html.skillAnchor.addEventListener('click', () => {
    html.skillsList.style.animationPlayState = 'running';

    html.skillsTitle.style.animationPlayState = 'running';
  })
}

function animationOnScroll(){
  const titleElement = document.querySelector('#section-skills h2');
  const listElement = document.querySelector('#section-skills ul');
  const scrollY = window.scrollY;

  if(scrollY > 600){
    titleElement.style.animationPlayState  = 'running';
    listElement.style.animationPlayState  = 'running';
  }
}

window.onload = () => {
  hoverImg();
  animationOnClick();
  window.onscroll = animationOnScroll
}