let num = 1;
img1 = new Image();
img1.src = "images/leo.gif";
img2 = new Image();
img2.src = "images/dino.gif";
img3 = new Image();
img3.src = "images/rhino.gif";

function slideshow() {

     num = num + 1;
    if (num === 4) {
        num = 1;
    }
    document.animal.src = eval("img" + num + ".src")
}

