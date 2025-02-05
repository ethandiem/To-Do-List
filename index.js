// calling both submit button and text box and assigning it to a function called addTask
document.getElementById("submitBtn").addEventListener("click", addTask);
document.getElementById("textInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// keeps stuff loaded thusfar
document.addEventListener("DOMContentLoaded", loadTasks);

// calling the addTask fuction previously mentioned and ensuring that itdoesn't apply blank inputs
function addTask() {
    const textValue = document.getElementById("textInput").value;
    if (textValue.trim() === "") return;


// creating a variable called task and saving after reload
    const task = {
        text: textValue,
        completed: false
    };

    saveTask(task);
    renderTask(task);

    document.getElementById("textInput").value = "";
}

// ensures the text inputed appears to the side of the task button
function renderTask(task) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("tasktexttotheside");

// creates the toggleable task button that will be empty until pressed then an X will be inside it and ads a strikethrough the text
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

// const newButton = document.getElementById("deletebutton")

//     newButton.addEventListener("mouseover", fuction() {
//     });
//     newButton.addEventListener("mouseout", function() {
//     })

// saves those tasks inputed and the strikethough and X if clicked
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
