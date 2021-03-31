function randomClasses() {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const syze = ['medium', 'big', 'reallybig'];
  const rotate = ['rotateleft', 'rotateright'];
  const skew = ['skewleft', 'skewright'];

  const randomStyleIndex = Math.floor(Math.random() * 3);
  const randomSyzeIndex = Math.floor(Math.random() * 3);
  const randomRotateIndex = Math.floor(Math.random() * 2);
  const randomSkewIndex = Math.floor(Math.random() * 2);

  let classes = `${style[randomStyleIndex]} `;
  classes += `${syze[randomSyzeIndex]} `;
  classes += `${rotate[randomRotateIndex]} `;
  classes += `${skew[randomSkewIndex]} `;

  return classes;
}

for (let index = 0; index < 19; index += 1) {
  console.log(randomClasses());
}

function wordCount(array) {
  const wordArray = array;
  const counterElement = document.getElementById('carta-contador');
  counterElement.innerHTML = wordArray.length;
}

function createLetter() {
  const letterInputElement = document.getElementById('carta-texto');
  const letterElement = document.getElementById('carta-gerada');
  const letterContent = letterInputElement.value;
  if (letterContent === '' || letterContent.trim() === '') {
    letterElement.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  letterElement.innerHTML = '';
  const letterContentArray = letterContent.split(' ');
  for (let index = 0; index < letterContentArray.length; index += 1) {
    const spanElement = document.createElement('span');
    const randomClass = randomClasses();
    spanElement.innerHTML = `${letterContentArray[index]} `;
    spanElement.className = randomClass;
    letterElement.appendChild(spanElement);
  }
  wordCount(letterContentArray);
}

window.onload = () => {
  const createLetterButtonElement = document.getElementById('criar-carta');

  createLetterButtonElement.onclick = createLetter;
};
