
//up-button script
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button_shown');
  } else {
    upButton.classList.remove('up-button_shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0)
}


// select script
let cards = document.querySelectorAll('.js-card');
let articlesSelect = document.querySelector('#articles__select');

articlesSelect.onchange = () => {
  for (let card of cards) {
    if (card.dataset.theme !== articlesSelect.value && articlesSelect.value !== 'all') {
      card.classList.add('js-card_hidden');
    } else {
      card.classList.remove('js-card_hidden');
    }
  }
};





