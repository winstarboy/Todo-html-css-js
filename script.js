const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        addTask();
    }
};

addButton.addEventListener("click", addTask);
inputBox.addEventListener("keypress", handleKeyPress);

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => localStorage.setItem("data", listContainer.innerHTML);

const showTask = () => listContainer.innerHTML = localStorage.getItem("data");

showTask();
