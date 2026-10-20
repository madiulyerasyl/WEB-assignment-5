let box = document.getElementById("myBox");
let text = document.getElementById("myText");

let colorButton = document.getElementById("colorButton");
let fontButton = document.getElementById("fontButton");

colorButton.addEventListener("click", function() {
    box.style.backgroundColor = "lightblue";
});

fontButton.addEventListener("click", function() {
    text.style.fontSize = "30px";
});