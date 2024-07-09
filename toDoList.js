//button to add items into taskList
const buttonAdd = document.querySelector(".addButton");
const editButton = document.querySelector(".editButton2");

buttonAdd.addEventListener("click", () => {
  let inputValue = document.querySelector(".inputTasks");
  let newElement = document.querySelector(".taskList");

  newElement.innerHTML += `<div class="single-task">
                                <h3>${inputValue.value}</h3>
                                <div class="task-actions">
                                    <button class="removeButton" onclick="removeTask(this)">Remove</button>
                                    <button class= "editButton" onclick="editTask(this)">Edit</button>
                                </div>
                            </div>`;

  inputValue.value = "";
});

//button to remove task from task list
function removeTask(element) {
  let task = element.closest(".single-task");

  task.remove();
}

//button to edit task
let inputValue = document.querySelector(".inputTasks");
let taskBeingEdited = null;

function editTask(element) {
  taskBeingEdited = element.closest(".single-task");
  let taskValue = taskBeingEdited.querySelector("h3").innerText;

  inputValue.value = taskValue;

  editButton.style.display = "block";
  buttonAdd.style.display = "none";
}

editButton.addEventListener("click", () => {
  if (taskBeingEdited) {
    let newTaskValue = inputValue.value;
    taskBeingEdited.querySelector("h3").innerText = newTaskValue;
    inputValue.value = "";

    editButton.style.display = "none";
    buttonAdd.style.display = "block";

    taskBeingEdited = null; 
  }
});
