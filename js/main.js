let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button_shown');
  } else {
    upButton.classList.remove('up-button_shown');
  }
}

upButton.onclick = function () {
  window.scrollTo(0, 0)
}