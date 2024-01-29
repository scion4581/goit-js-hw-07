'use strict';

const START_WIDTH_SIZE = 30;
const START_HEIGHT_SIZE = 30;
const STEP_SIZE = 10;

const MIN_BOX_AMOUNT = 1;
const MAX_BOX_AMOUNT = 100;

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxesCounter = document.querySelector("#controls input");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createOneBox(width, height, backgroundColor) {
  const box = document.createElement("div");
  box.style.width = width+"px";
  box.style.height = height+"px";
  box.style.backgroundColor = backgroundColor;
  return box;
}

function createBoxes(amount) {
  if (amount < MIN_BOX_AMOUNT || amount > MAX_BOX_AMOUNT) {
    return;
  }
  destroyBoxes();
  const boxes = [];
  let boxWidth = START_WIDTH_SIZE;
  let boxHeight = START_HEIGHT_SIZE;
  for (let i = 1; i <= amount; i++) {
    const a = createOneBox(boxWidth, boxHeight, getRandomHexColor());
    boxes.push(a.outerHTML);
    boxWidth += STEP_SIZE;
    boxHeight += STEP_SIZE;
  }
  boxesContainer.innerHTML = boxes.join("");
}

function destroyBoxes(){
  boxesContainer.innerHTML = '';
}

destroyBtn.addEventListener("click", event => {
  destroyBoxes();
  boxesCounter.value = '';
});

createBtn.addEventListener("click", event => {
  createBoxes(parseInt(boxesCounter.value));
});

