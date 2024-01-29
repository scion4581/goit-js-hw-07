'use strict';

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", event => {
    const name = event.target.value.trim();
    nameOutput.innerHTML = name.length > 0 ? name : "Anonymous";
});