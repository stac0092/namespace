let stac0092 = {
boxClick: function(){
	 this.style.borderColor = "pink";
    this.style.backgroundColor = "purple";
},
mouseOver: function(e) {
    e.target.classList.toggle("highlight");
	 e.target.removeAttribute('style'); 

},
mouseOut: function(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style'); 
},
init: function () {

        let newBoxSection = document.createElement("square");
        newBoxSection.className = "box";
        newBoxSection.textContent = "stac0092";
     
        let box = document.getElementById("boxes");
        box.appendChild(newBoxSection);

        newBoxSection.addEventListener("click", stac0092.boxClick);
        newBoxSection.addEventListener("mouseover", stac0092.mouseOver);
        newBoxSection.addEventListener("mouseout", stac0092.mouseOut);
    }

}

stac0092.init;