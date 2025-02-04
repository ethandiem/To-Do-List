// console.log('My code is running');

document.getElementById("submitBtn").addEventListener("click", function() {
  const textValue = document.getElementById("textInput").value;
    if (textValue.trim() === "") return;

  const wrapper = document.createElement("div");
    wrapper.classList.add("tasktexttotheside");

  const NewButton = document.createElement("button");
    NewButton.textContent = " ";
    NewButton.classList.add("tasks");

    const textNode = document.createElement("span");
    textNode.textContent = textValue;

  // const textNode = document.createTextNode(" " + textValue);

  const container = document.getElementById("buttonContainer").appendChild(wrapper);
    container.appendChild(NewButton);
    container.appendChild(textNode);

document.getElementById("buttonContainer").appendChild(wrapper);

document.getElementById("textInput").value = "";

});