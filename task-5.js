'use strinct';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");

changeColorBtn.addEventListener("click", event => {
  document.body.style.backgroundColor = colorOutput.textContent = getRandomHexColor();
});
