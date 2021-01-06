// Form wrapper script
let commentsInpurForm = document.querySelector('.comments__input-form');
let commentsInputData = document.querySelector('.comments__input-button');
if  (window.innerWidth < 595) {
  commentsInpurForm.append(commentsInputData);
}