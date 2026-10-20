let box = document.getElementById("myBox");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "lightgray";
});