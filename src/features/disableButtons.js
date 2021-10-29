function disableButtons() {
  if (document.body.clientWidth <= 1000) {
    const buttons = document.querySelectorAll('.project-button');

    buttons.forEach((button) => {
      button.disabled = true;
      button.style.cursor = 'not-allowed';
    });
  }
}

export default disableButtons;
