const data = [
  {
    title: 'Facebook Sign In',
    tags: '#fundamentos #html #css',
    description:
      'Projeto realizado durante o módulo de fundamentos da Trybe. Consiste na interface antiga de login do Facebook.',
    thumbnail_path: 'images/projects-thubnails/facebook-signin.png',
    link: 'https://defauth98.github.io./projects/facebook-signup/index.html',
    repo_link:
      'https://github.com/defauth98/defauth98.github.io/tree/main/projects/facebook-signup',
  },
  {
    title: 'Pixels Art',
    tags: '#fundamentos #html #css #js',
    description:
      'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnail_path: 'images/projects-thubnails/pixels-art.png',
    link: 'https://defauth98.github.io/projects/pixels-art/index.html',
    repo_link:
      'https://github.com/defauth98/defauth98.github.io/tree/main/projects/pixels-art',
  },
  {
    title: 'TodoList',
    tags: '#fundamentos #html #css #js',
    description:
      'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnail_path: 'images/projects-thubnails/todo-list.png',
    link: 'https://defauth98.github.io/projects/todo-list/index.html',
    repo_link:
      'https://github.com/defauth98/defauth98.github.io/tree/main/projects/todo-list',
  },
  {
    title: 'Shopping Cart',
    tags: '#fundamentos #js #fetch',
    description:
      'Projeto realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de requisições para APIs em prática.',
    thumbnail_path: 'images/projects-thubnails/shopping-cart.png',
    link: 'https://defauth98.github.io/projects/shopping-cart/index.html',
    repo_link: 'https://github.com/defauth98/shopping-cart',
  },
  {
    title: 'Movie Library CRUD',
    tags: '#frontend #react',
    description:
      'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de usar o ciclo de vida do React.',
    thumbnail_path: 'images/projects-thubnails/movie-card-crud.png',
    link: 'https://defauth98.github.io/movie-cards-library-crud',
    repo_link: 'https://github.com/defauth98/movie-cards-library-crud',
  },
  {
    title: 'Frontend Online Store',
    tags: '#frontend #react',
    description:
      'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos de Scrum e Kanban em prática',
    thumbnail_path: 'images/projects-thubnails/frontend-online-store.png',
    link: 'https://defauth98.github.io/frontend-online-store',
    repo_link: 'https://github.com/defauth98/frontend-online-store',
  },
  {
    title: 'Trybewallet',
    tags: '#frontend #react #redux',
    description:
      'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática.',
    thumbnail_path: 'images/projects-thubnails/trybewallet.png',
    link: 'https://defauth98.github.io/trybewallet',
    repo_link: 'https://github.com/defauth98/trybewallet',
  },
  {
    title: 'Trivia',
    tags: '#frontend #react #redux',
    description:
      'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática e praticar mais a colaboração. ',
    thumbnail_path: 'images/projects-thubnails/trivia.png',
    link: 'https://defauth98.github.io/trivia',
    repo_link: 'https://github.com/defauth98/trivia',
  },

  {
    title: 'Starwars Planets Search',
    tags: '#frontend #react #bootstrap',
    description: 'Projeto que usa dos métodos do Array para fazer busca.',
    thumbnail_path: 'images/projects-thubnails/starwars-planets-search.png',
    link: 'https://defauth98.github.io/starwars-planets-search/',
    repo_link: 'https://github.com/defauth98/starwars-planets-search',
  },
  {
    title: 'Proffy',
    tags: '#frontend #backend #mobile',
    description: 'Projeto desenvolvido durante o evento da rocketseat NLW.',
    thumbnail_path: 'images/projects-thubnails/proffy.png',
    link: 'https://proffy-deploy-frontend.netlify.app/',
    repo_link: 'https://github.com/defauth98/proffy',
  },
  {
    title: 'Calculator',
    tags: '#frontend #react',
    description:
      'Projeto pessoal, usando React Hooks e Styled Components. Esse foi um dos primeiros projetos que desenvolvi inicio dos estudo de ReactJS',
    thumbnail_path: 'images/projects-thubnails/calculator.png',
    link: 'https://defauth98.github.io/calculator/',
    repo_link: 'https://github.com/defauth98/calculator',
  },
  {
    title: 'Weather App',
    tags: '#frontend #react #api',
    description:
      'Projeto pessoal, usando typescript com React. Consume a API Open Weather Map. Projeto desenvolvido com o intuito de aprender mais sobre Typescript e APIs',
    thumbnail_path: 'images/projects-thubnails/weather-app.png',
    link: 'https://defauth98.github.io/weather-app/',
    repo_link: 'https://github.com/defauth98/weather-app',
  },
];

const projectList = data.map((project, index) => ({
  id: index + 1,
  ...project,
}));

export default projectList;
