const popup = document.querySelector(".t-popup");
const btnPopup = document.querySelectorAll(".btn__popup");
const close = document.querySelector(".t-popup__block-close-button");

btnPopup.forEach((item) => {
  item.addEventListener("click", () => {
    popup.style.display = "block";
    popup.style.opacity = "1";
  });
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
