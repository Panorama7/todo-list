const newTask = document.querySelector("input[type = text]");
const addTask = document.querySelector(".addTask");
const myList = document.querySelector(".taskConteiner"); 

let tasks = [];


let newItem = [];


function Task(description) {
  this.description = description;
  this.completed = false;
}



const createTemplate = (task, index) => {
  return `
  <div class="newTask ${task.completed ? 'checked' : ''}">
    <div class="taskText">${task.description}</div>
    <div class="buttons">
      <input onclick = "taskCompleted(${index})" type="checkbox" class="completed" ${task.completed ? 'checked' : ''}>
      <button  onclick = "taskDeleted(${index})">Delete</button>
    </div>
  </div>
  `
}

const myTaskList = () => {
  myList.innerHTML = '';
  if(tasks.length > 0) {
    tasks.forEach((item, index) => {
      myList.innerHTML += createTemplate(item, index); 
    });
    newItem = document.querySelectorAll('.newTask');
  } 
}

myTaskList();


const taskCompleted = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
      newItem[index].classList.add('completed');
    } else {
      newItem[index].classList.remove('completed');
    }
    myTaskList();
  }

addTask.addEventListener("click", () => {
tasks.push(new Task(newTask.value));
myTaskList();
newTask.value = '';
})

const taskDeleted = index => {
  tasks.splice(index, 1);
  myTaskList();
}
