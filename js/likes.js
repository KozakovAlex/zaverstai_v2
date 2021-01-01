
let goodPic = document.querySelector(".on-click");
let likesNumber = document.querySelector(".resume-likes-stats");

goodPic.onclick = function () {
  if (goodPic.classList.contains("added")) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  goodPic.classList.toggle("added");
}

