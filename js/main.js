const map = document.querySelector("#map");
const paths = map.querySelectorAll("path");
const blockInfo = document.querySelectorAll(".info");

map.addEventListener("click", (e) => {
  const target = e.target;
  const region = target.getAttribute("data-region");
  if (region) {
    blockInfo.forEach((elem) => {
      elem.style.display = "none";
    });
    paths.forEach((elem) => {
      elem.style.fill = "aqua"; // цвет как в css стилях '.mapSVG path'
      elem.style.opacity = "0";
    });
    for (let i = 0; i < blockInfo.length; i++) {
      const blockRegion = blockInfo[i].getAttribute("data-region");
      if (region === blockRegion) {
        blockInfo[i].style.display = "block";
        target.style.fill = "red"; // цвет при клике
        target.style.opacity = "1";
        break;
      }
    }
  }
});
