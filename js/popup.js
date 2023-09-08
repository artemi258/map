const popup = document.querySelector(".t-popup");
const btnMain = document.querySelector(".t182__btn ");
const btn = document.querySelector(".t744__btn-wrapper");
const close = document.querySelector(".t-popup__block-close-button");

btn.addEventListener("click", () => {
  popup.style.display = "block";
  popup.style.opacity = "1";
});
btnMain.addEventListener("click", () => {
  popup.style.display = "block";
  popup.style.opacity = "1";
});
close.addEventListener("click", (e) => {
  popup.style.display = "none";
  popup.style.opacity = "0";
});
popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("t-popup")) {
    popup.style.display = "none";
    popup.style.opacity = "0";
  }
});
