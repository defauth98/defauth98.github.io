const projectList = 
[
  {
    id: 1,
    title: 'Facebook Sign In',
    tags: '#fundamentos #html #css',
    description: 'Projeto realizado durante o módulo de fundamentos da Trybe. Consiste na interface antiga de login do Facebook.',
    thumbnail_path: 'images/projects-thubnails/facebook-signin.png',
    link: 'https://defauth98.github.io./projects/facebook-signup/index.html'
  },
  {
    id: 2,
    title: 'Pixels Art',
    tags: '#fundamentos #html #css #js',
    description: 'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnail_path: 'images/projects-thubnails/pixels-art.png',
    link: 'https://defauth98.github.io/projects/pixels-art/index.html'
  },
  {
    id: 3,
    title: 'TodoList',
    tags: '#fundamentos #html #css #js',
    description: 'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnail_path: 'images/projects-thubnails/todo-list.png',
    link: 'https://defauth98.github.io/projects/todo-list/index.html'
  },
  {
    id: 4,
    title: 'Meme Generator',
    tags: '#fundamentos #html #css #js',
    description: 'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da CSS em prática.',
    thumbnail_path: 'images/projects-thubnails/meme-generator.png',
    link: 'https://defauth98.github.io/projects/meme-generator/index.html'
  },
  {
    id: 5,
    title: 'Shopping Cart',
    tags: '#fundamentos #js #fetch',
    description: 'Projeto realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de requisições para APIs em prática.',
    thumbnail_path: 'images/projects-thubnails/shopping-cart.png',
    link: 'https://defauth98.github.io/projects/shopping-cart/index.html'
  },
  {
    id: 6,
    title: 'Movie Library',
    tags: '#frontend #react',
    description: 'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de iniciar no desenvolvimento web usando o Framework React.',
    thumbnail_path: 'images/projects-thubnails/movie-card-library.png',
    link: 'https://defauth98.github.io/movie-cards-library'
  },
  {
    id: 7,
    title: 'Movie Library Statefull',
    tags: '#frontend #react',
    description: 'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de usar formulários com React.',
    thumbnail_path: 'images/projects-thubnails/movie-cards-library-stateful.png',
    link: 'https://defauth98.github.io/movie-cards-library-stateful'
  },
  {
    id: 8,
    title: 'Movie Library CRUD',
    tags: '#frontend #react',
    description: 'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de usar o ciclo de vida do React.',
    thumbnail_path: 'images/projects-thubnails/movie-card-crud.png',
    link: 'https://defauth98.github.io/movie-cards-library-crud'
  },
  {
    id: 9,
    title: 'Frontend Online Store',
    tags: '#frontend #react',
    description: 'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos de Scrum e Kanban em prática',
    thumbnail_path: 'images/projects-thubnails/frontend-online-store.png',
    link: 'https://defauth98.github.io/frontend-online-store'
  },
  {
    id: 10,
    title: 'Trybewallet',
    tags: '#frontend #react #redux',
    description: 'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática.',
    thumbnail_path: 'images/projects-thubnails/trybewallet.png',
    link: 'https://defauth98.github.io/trybewallet'
  },
  {
    id: 11,
    title: 'Trivia',
    tags: '#frontend #react #redux',
    description: 'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática e praticar mais a colaboração.',
    thumbnail_path: 'images/projects-thubnails/trivia.png',
    link: 'https://defauth98.github.io/trivia'
  },
  {
    id: 12,
    title: 'Recipes App',
    tags: '#frontend #react #hooks',
    description: 'Projeto final do módulo frontend, realizado em grupo. Com objetivo de colocar os conhecimentos de React Hooks em prática.',
    thumbnail_path: 'images/projects-thubnails/recipes-app.png',
    link: 'https://defauth98.github.io/recipes-app'
  },
  {
    id: 13,
    title: 'Starwars Planets Search',
    tags: '#frontend #react #bootstrap',
    description: 'Projeto que usa dos métodos do Array para fazer busca.',
    thumbnail_path: 'images/projects-thubnails/starwars-planets-search.png',
    link: 'https://defauth98.github.io/starwars-planets-search/'
  },
  {
    id: 14,
    title: 'Proffy',
    tags: '#frontend #backend #mobile',
    description: 'Projeto desenvolvido durante o evento da rocketseat NLW.',
    thumbnail_path: 'images/projects-thubnails/proffy.png',
    link: 'https://proffy-deploy-frontend.netlify.app/'
  }
]

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

  asidebar: document.querySelector('#aside-bar'),
  projectList: document.querySelector('#project-list'),
  modal: document.querySelector('#project-modal')
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

  if(scrollY > 1220) {
    hideAsideBar();
  }

  if(scrollY < 1220) {
    showAsidebar();
  }
 }

function hideAsideBar() {
  html.asidebar.style.display = 'none';
}

function showAsidebar() {
  html.asidebar.style.display = 'flex';
}

function createHTMLElement (element, childs, text , className, id) {
  const HTMLElement = document.createElement(element);

  if(childs !== null && childs.length >= 1) {
    childs.forEach(element => {
      HTMLElement.appendChild(element)
    })
  }

  if(text) {
    HTMLElement.innerText = text;
  }

  if(className) {
    HTMLElement.className = className;
  }

  if(id) {
    HTMLElement.id = id;
  }

  return HTMLElement;
}

function createProjectCard(project) {
  const projectImage = createHTMLElement('img', null, null, 'project-image');
  projectImage.src = project.thumbnail_path;
  projectImage.alt = project.title;

  const projectImageContainer = createHTMLElement('div', [projectImage], null , 
  'image-container' )


  const projectTitle = createHTMLElement('h2', null ,project.title, null);
  const projectTags = createHTMLElement('span', null, project.tags, null)
  const projetcInfoContainer = createHTMLElement('div', [projectTitle, projectTags], null,
   'project-info');

  const projectButton = createHTMLElement('button', 
    [projectImageContainer, projetcInfoContainer], null, 'project-button');
  projectButton.type = 'button';
  projectButton.onclick = () => createModal(project.id)
  const projectContainer = createHTMLElement('li', [projectButton], null, null)

  html.projectList.appendChild(projectContainer);
}

function createProjectCardList() {
  projectList.forEach(element => {
    createProjectCard(element)
  });
}

function destroyModal() {
  document.body.removeChild(document.querySelector('#project-modal'))
}

function createModal(id){
  const project = projectList[id - 1];

  const projectImage = createHTMLElement('img', null, null, null, 'project-modal-img');
  projectImage.src = project.thumbnail_path;

  const projectTitle = createHTMLElement('h1', null, project.title, null, null);
  const projectTags = createHTMLElement('h3', null, project.tags, null, null);
  const projectDescription = createHTMLElement('p', null, project.description, null, null)
  

  const backButton = createHTMLElement('button', null, 'Voltar', null, null);
  backButton.onclick = destroyModal;
  const forwardButton = createHTMLElement('a', null, 'Acessar site', null, 'project-link');
  forwardButton.href = project.link;
  forwardButton.target = '_blank';

  const buttonsContainer = createHTMLElement('div', [backButton, forwardButton], null, null, 'modal-buttons');


  const projectInfo = createHTMLElement('div', [projectTitle, projectTags, projectDescription, buttonsContainer], null, null, 'project-modal-info');

  const modalContainer = createHTMLElement('div', [projectImage, projectInfo], null, null, 'project-modal-content');
  const modal = createHTMLElement('section', [modalContainer], null, null, 'project-modal');

  document.body.appendChild(modal)
}

window.onload = () => {
  hoverImg();
  animationOnClick();
  createProjectCardList();
  window.onscroll = animationOnScroll;

  if(window.scrollY > 1220){
    html.asidebar.style.display = 'none';
  }
}