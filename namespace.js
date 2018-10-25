/********************************
Filename: main.js
Author: Mackenzie Stack
Description: Namespace
Date: Oct 24th 2018
*********************************/



var STAC0092 = {

    init: function () {

        let newBox = document.createElement("div");
        newBox.className = "box";
        newBox.textContent = "stac0092";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBox);

        newBox.addEventListener("click", mouseClick);
        newBox.addEventListener("mouseover", mouseOver);
        newBox.addEventListener("mouseout", mouseOut);
    }
}

function mouseClick() {
    this.style.borderColor = "#ffc0cb";
    this.style.backgroundColor = "#00DDFF";
}

function mouseOver() {
    this.classList.toggle("highlight");
}

function mouseOut() {
    this.classList.toggle("highlight");
    this.removeAttribute("style");
}
