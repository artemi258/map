const paths = document.querySelectorAll("path");
const map = document.querySelector("#map");
const blockInfo = document.querySelectorAll(".info");

map.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    const target = e.target;
    const region = target.getAttribute("data-region");
    blockInfo.forEach((elem) => {
      elem.style.display = "none";
    });
    for (let i = 0; i < blockInfo.length; i++) {
      const blockRegion = blockInfo[i].getAttribute("data-region");
      if (region === blockRegion) blockInfo[i].style.display = "block";
    }
  },
  true
);
