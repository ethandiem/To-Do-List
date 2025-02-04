// console.log('My code is running');

document.getElementById("submitBtn").addEventListener("click", function() {
  const textValue = document.getElementById("textInput").value;
    if (textValue.trim() === "") return;

  const NewButton = document.createElement("button");
    NewButton.textContent = " ";

  const textNode = document.createTextNode(" " + textValue);

  const container = document.getElementById("buttonContainer");
    container.appendChild(NewButton);
    container.appendChild(textNode);

document.getElementById("textInput").value = "";

});