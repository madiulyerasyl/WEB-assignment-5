let tasks = [];

let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Add a new task
addButton.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    taskInput.value = "";
    showTasks();
});

// Display all tasks
function showTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", function() {
            task.completed = !task.completed;
            showTasks();
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            showTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}