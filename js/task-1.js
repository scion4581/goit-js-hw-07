'use strict';


const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + categories.length);

categories.forEach(category => {
    const categoryName = category.querySelector("h2").innerText;
    console.log("Category: " + categoryName);
    const categoryElements = category.querySelectorAll("li");
    console.log("Elements: " + categoryElements.length);
});