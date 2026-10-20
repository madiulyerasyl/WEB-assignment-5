let input = document.getElementById("myInput");
let output = document.getElementById("output");

input.addEventListener("keyup", function() {
    output.textContent = input.value;
});