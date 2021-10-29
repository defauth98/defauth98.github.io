import html from '../html.js';
import projectList from '../projects/projectData.js';
import createHTMLElement from '../utils/createHtmlElement.js';
import { createModal } from './modal.js';

function createProjectCard(project) {
  const projectImage = createHTMLElement('img', null, null, 'project-image');
  projectImage.src = project.thumbnail_path;
  projectImage.alt = project.title;

  const projectImageContainer = createHTMLElement(
    'div',
    [projectImage],
    null,
    'image-container'
  );

  const projectTitle = createHTMLElement('h2', null, project.title, null);
  const projectTags = createHTMLElement('span', null, project.tags, null);
  const projetcInfoContainer = createHTMLElement(
    'div',
    [projectTitle, projectTags],
    null,
    'project-info'
  );

  const projectButton = createHTMLElement(
    'button',
    [projectImageContainer, projetcInfoContainer],
    null,
    'project-button'
  );
  projectButton.type = 'button';
  projectButton.onclick = () => createModal(project.id);
  const projectContainer = createHTMLElement('li', [projectButton], null, null);

  html.projectList.appendChild(projectContainer);
}

function createProjectCardList() {
  projectList.forEach((element) => {
    createProjectCard(element);
  });
}

export default createProjectCardList;
