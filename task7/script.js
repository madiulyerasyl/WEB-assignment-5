let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Enter both numbers";
        return;
    }

    let a = Number(num1.value);
    let b = Number(num2.value);
    let answer;

    if (operation === "+") {
        answer = a + b;
    } else if (operation === "-") {
        answer = a - b;
    } else if (operation === "*") {
        answer = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }

        answer = a / b;
    }

    result.textContent = answer;
}

document.getElementById("addButton").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtractButton").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiplyButton").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divideButton").addEventListener("click", function() {
    calculate("/");
});