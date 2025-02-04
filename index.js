document.getElementById("submitBtn").addEventListener("click", addTask);
document.getElementById("textInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const textValue = document.getElementById("textInput").value;
    if (textValue.trim() === "") return;

    const task = {
        text: textValue,
        completed: false
    };

    saveTask(task);
    renderTask(task);

    document.getElementById("textInput").value = "";
}

function renderTask(task) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("tasktexttotheside");

    const newButton = document.createElement("button");
    newButton.textContent = task.completed ? "X" : "";
    newButton.classList.add("taskbutton");

    const textNode = document.createElement("span");
    textNode.textContent = task.text;

    if (task.completed) {
        textNode.classList.add("strikethrough");
    }

    newButton.addEventListener("click", function () {
        task.completed = !task.completed;
        textNode.classList.toggle("strikethrough");
        newButton.textContent = task.completed ? "X" : "";
        updateLocalStorage();
    });

    wrapper.appendChild(newButton);
    wrapper.appendChild(textNode);
    document.getElementById("buttonContainer").appendChild(wrapper);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(renderTask);
}

function updateLocalStorage() {
    let taskElements = document.querySelectorAll(".tasktexttotheside");
    let tasks = [];

    taskElements.forEach(wrapper => {
        const text = wrapper.querySelector("span").textContent;
        const completed = wrapper.querySelector("button").textContent === "X";
        tasks.push({ text, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
