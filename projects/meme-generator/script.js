const memeContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');

function getTextFromInput() {
  const textMemeInputElement = document.getElementById('text-input');
  const textMemeElement = document.getElementById('meme-text');

  textMemeInputElement.oninput = () => {
    textMemeElement.innerHTML = textMemeInputElement.value;
  };
}

function uploadImage() {
  const fileInputElement = document.getElementById('meme-insert');
  const imageMemeInputElement = document.getElementById('meme-image');

  fileInputElement.onchange = () => {
    // reference: https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav
    const imageUrl = URL.createObjectURL(fileInputElement.files[0]);
    imageMemeInputElement.src = imageUrl;
  };
}

const addFireBorder = () => {
  memeContainer.style.border = '3px dashed red';
};

const addWaterBorder = () => {
  memeContainer.style.border = '5px double blue';
};

const addEartchBorder = () => {
  memeContainer.style.border = '6px groove green';
};

const changeBackground = (template) => {
  const { src } = template;

  memeImage.src = src;
};

window.onload = () => {
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const earthButton = document.getElementById('earth');
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');

  fireButton.onclick = addFireBorder;
  waterButton.onclick = addWaterBorder;
  earthButton.onclick = addEartchBorder;
  meme1.onclick = () => changeBackground(meme1);
  meme2.onclick = () => changeBackground(meme2);
  meme3.onclick = () => changeBackground(meme3);
  meme4.onclick = () => changeBackground(meme4);

  getTextFromInput();
  uploadImage();
};
