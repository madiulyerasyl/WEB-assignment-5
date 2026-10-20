let list = document.getElementById("myList");

let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");

let itemNumber = 3;

addButton.addEventListener("click", function() {
    let newItem = document.createElement("li");

    newItem.textContent = "Item " + itemNumber;

    list.appendChild(newItem);

    itemNumber++;
});

removeButton.addEventListener("click", function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});