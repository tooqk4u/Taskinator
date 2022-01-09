let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");



let taskFormHandler = function(event) {
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);

  // package up data as an object
  let taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  createTaskEl(taskDataObj);

};

// taskDataObj
let createTaskEl = function(taskDataObj){
   // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  
  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  
  listItemEl.appendChild(taskInfoEl);
  
  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);

