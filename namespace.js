var stac0092  = {
    boxClick: function () {
        this.style.borderColor = "black";
        this.style.backgroundColor = "red";
        console.log(this);
    },

    mouseOver: function (e) {
        e.target.classList.toggle("highlight");
        console.log(e);
        console.log(e.target);
    },

    mouseOut: function (e) {
        e.target.classList.toggle("highlight");
        e.target.removeAttribute('style');
        console.log(e);
        console.log(e.target);
    },

    init: function () {
        let newBoxSection = document.createElement("div");
        newBoxSection.className = "box";
        newBoxSection.textContent = "stac0092";
        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBoxSection);



        newBoxSection.addEventListener("click", stac0092.boxClick);
        newBoxSection.addEventListener("mouseover", stac0092.mouseOver);
        newBoxSection.addEventListener("mouseout", stac0092.mouseOut);
    }

}

stac0092 .init;
