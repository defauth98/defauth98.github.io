const data = [
  {
    title: 'Facebook Sign In',
    tags: {
      js: true,
      ts: false,
      html: true,
      css: true,
      react: false,
      node: false,
    },
    description:
      'Projeto realizado durante o módulo de fundamentos da Trybe. Consiste na interface antiga de login do Facebook.',
    thumbnailPath: 'projects-thubnails/facebook-signin.png',
    link: 'https://defauth98.github.io./projects/facebook-signup/index.html',
    repoLink: 'https://github.com/defauth98/defauth98.github.io/tree/main/projects/facebook-signup',
  },
  {
    title: 'Pixels Art',
    tags: {
      js: true,
      ts: false,
      html: true,
      css: true,
      react: false,
      node: false,
    },
    description:
      'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnailPath: 'projects-thubnails/pixels-art.png',
    link: 'https://defauth98.github.io/projects/pixels-art/index.html',
    repoLink: 'https://github.com/defauth98/defauth98.github.io/tree/main/projects/pixels-art',
  },
  {
    title: 'TodoList',
    tags: {
      js: true,
      ts: false,
      html: true,
      css: true,
      react: false,
      node: false,
    },
    description:
      'Projeto bônus realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de manipulação da DOM em prática.',
    thumbnailPath: 'projects-thubnails/todo-list.png',
    link: 'https://defauth98.github.io/projects/todo-list/index.html',
    repoLink: 'https://github.com/defauth98/defauth98.github.io/tree/main/projects/todo-list',
  },
  {
    title: 'Shopping Cart',
    tags: {
      js: true,
      ts: false,
      html: true,
      css: true,
      react: false,
      node: false,
    },
    description:
      'Projeto realizado durante o módulo de fundamentos da Trybe. Com o objetivo de colocar os conhecimentos de requisições para APIs em prática.',
    thumbnailPath: 'projects-thubnails/shopping-cart.png',
    link: 'https://defauth98.github.io/projects/shopping-cart/index.html',
    repoLink: 'https://github.com/defauth98/shopping-cart',
  },
  {
    title: 'Movie Library CRUD',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de usar o ciclo de vida do React.',
    thumbnailPath: 'projects-thubnails/movie-card-crud.png',
    link: 'https://defauth98.github.io/movie-cards-library-crud',
    repoLink: 'https://github.com/defauth98/movie-cards-library-crud',
  },
  {
    title: 'Frontend Online Store',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos de Scrum e Kanban em prática',
    thumbnailPath: 'projects-thubnails/frontend-online-store.png',
    link: 'https://defauth98.github.io/frontend-online-store',
    repoLink: 'https://github.com/defauth98/frontend-online-store',
  },
  {
    title: 'Trybewallet',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática.',
    thumbnailPath: 'projects-thubnails/trybewallet.png',
    link: 'https://defauth98.github.io/trybewallet',
    repoLink: 'https://github.com/defauth98/trybewallet',
  },
  {
    title: 'Trivia',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto em grupo realizado durante o módulo de frontend da Trybe. Com o objetivo de colocar os conhecimentos sobre Redux em prática e praticar mais a colaboração. ',
    thumbnailPath: 'projects-thubnails/trivia.png',
    link: 'https://defauth98.github.io/trivia',
    repoLink: 'https://github.com/defauth98/trivia',
  },

  {
    title: 'Starwars Planets',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description: 'Projeto que usa dos métodos do Array para fazer busca.',
    thumbnailPath: 'projects-thubnails/starwars-planets-search.png',
    link: 'https://defauth98.github.io/starwars-planets-search/',
    repoLink: 'https://github.com/defauth98/starwars-planets-search',
  },
  {
    title: 'Proffy',
    tags: {
      js: false,
      ts: true,
      html: false,
      css: false,
      react: true,
      node: true,
    },
    description: 'Projeto desenvolvido durante o evento da rocketseat NLW.',
    thumbnailPath: 'projects-thubnails/proffy.png',
    link: 'https://proffy-deploy-frontend.netlify.app/',
    repoLink: 'https://github.com/defauth98/proffy',
  },
  {
    title: 'Calculator',
    tags: {
      js: true,
      ts: false,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto pessoal, usando React Hooks e Styled Components. Esse foi um dos primeiros projetos que desenvolvi inicio dos estudo de ReactJS',
    thumbnailPath: 'projects-thubnails/calculator.png',
    link: 'https://defauth98.github.io/calculator/',
    repoLink: 'https://github.com/defauth98/calculator',
  },
  {
    title: 'Weather App',
    tags: {
      js: false,
      ts: true,
      html: false,
      css: false,
      react: true,
      node: false,
    },
    description:
      'Projeto pessoal, usando typescript com React. Consume a API Open Weather Map. Projeto desenvolvido com o intuito de aprender mais sobre Typescript e APIs',
    thumbnailPath: 'projects-thubnails/weather-app.png',
    link: 'https://defauth98.github.io/weather-app/',
    repoLink: 'https://github.com/defauth98/weather-app',
  },
  {
    title: 'Web Chat',
    tags: {
      js: false,
      ts: false,
      html: true,
      css: true,
      react: false,
      node: true,
    },
    description:
      'Projeto realizado durante o modulo de backend da Trybe. Consiste em um chat usando a arquitetura MVC com web sockets.',
    thumbnailPath: 'projects-thubnails/web-chat.png',
    link: 'https://defauth98-web-chat.herokuapp.com/',
    repoLink: 'https://github.com/defauth98/web-chat',
  },
];

const projectList = data.map((project, index) => ({
  id: index + 1,
  ...project,
}));

export default projectList;
