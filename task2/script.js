let paragraph = document.getElementById("myText");
let button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed!";
});