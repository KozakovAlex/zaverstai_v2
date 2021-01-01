
let form = document.querySelector('.comments__input-form');
let commentsMemos = document.querySelector('.comments__memos');
let inputName = document.querySelector('.input-name');
let inputMemo = document.querySelector('.input-memo');

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('div');
  newComment.textContent = inputName.value + ': ' + inputMemo.value;
  newComment.classList.add('comments__memo');
  commentsMemos.append(newComment);

  inputName.value = '';
  // inputEmail.value = '';
  inputMemo.value = '';

}


// let headerLink = document.querySelectorAll('.link-item');
// headerLink.onclick = function (evt) {
//   evt.preventDefault();
// }