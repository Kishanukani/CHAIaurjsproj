const randomcolor = function () {
  const hexa = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexa[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;
const startchanging = function () {
  if (!interval) {
    interval = setInterval(changecolor, 1000);
  }
  function changecolor() {
    // document.querySelector("start")
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopchanging = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startchanging);
document.querySelector("#stop").addEventListener("click", stopchanging);
