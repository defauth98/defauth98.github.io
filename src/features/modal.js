import projectList from '../projects/projectData.js';
import createHTMLElement from '../utils/createHtmlElement.js';

function destroyModal() {
  document.body.removeChild(document.querySelector('#project-modal'));
}

function createModal(id) {
  const project = projectList[id - 1];

  const projectImage = createHTMLElement(
    'img',
    null,
    null,
    null,
    'project-modal-img'
  );
  projectImage.src = project.thumbnail_path;

  const projectTitle = createHTMLElement('h1', null, project.title, null, null);
  const projectTags = createHTMLElement('h3', null, project.tags, null, null);
  const projectDescription = createHTMLElement(
    'p',
    null,
    project.description,
    null,
    null
  );

  const backButton = createHTMLElement('button', null, 'Voltar', null, null);
  backButton.onclick = destroyModal;
  const forwardButton = createHTMLElement(
    'a',
    null,
    'Acessar site',
    null,
    'project-link'
  );
  forwardButton.href = project.link;
  forwardButton.target = '_blank';

  const githubIcon = createHTMLElement('img', null, null, 'github-logo');
  githubIcon.src = '../images/social-icons/github.png';
  githubIcon.alt = 'Github Icon';

  const githubButton = createHTMLElement(
    'a',
    [githubIcon],
    null,
    'github-button'
  );
  githubButton.href = project.repo_link;
  githubButton.target = '_blank';

  const forwardButtons = createHTMLElement(
    'div',
    [backButton, forwardButton],
    null,
    'forward-buttons',
    null
  );

  const buttonsContainer = createHTMLElement(
    'div',
    [githubButton, forwardButtons],
    null,
    null,
    'modal-buttons'
  );

  const projectInfo = createHTMLElement(
    'div',
    [projectTitle, projectTags, projectDescription, buttonsContainer],
    null,
    null,
    'project-modal-info'
  );

  const modalContainer = createHTMLElement(
    'div',
    [projectImage, projectInfo],
    null,
    null,
    'project-modal-content'
  );
  const modal = createHTMLElement(
    'section',
    [modalContainer],
    null,
    null,
    'project-modal'
  );

  document.body.appendChild(modal);
}

export { destroyModal, createModal };
