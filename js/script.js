var link = document.querySelector(".feedback");
var popup = document.querySelector(".feedback-form-inner");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("feedback-form-show")) {
      popup.classList.remove("feedback-form-show"), overlay.classList.remove("modal-overlay-show");
    }
  }
});
