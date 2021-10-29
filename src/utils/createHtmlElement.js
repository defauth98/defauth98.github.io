function createHTMLElement(element, childs, text, className, id) {
  const HTMLElement = document.createElement(element);

  if (childs !== null && childs.length >= 1) {
    childs.forEach((element) => {
      HTMLElement.appendChild(element);
    });
  }

  if (text) {
    HTMLElement.innerText = text;
  }

  if (className) {
    HTMLElement.className = className;
  }

  if (id) {
    HTMLElement.id = id;
  }

  return HTMLElement;
}

export default createHTMLElement;
