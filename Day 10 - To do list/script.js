
document.addEventListener("DOMContentLoaded", function(){
  const todoInput = document.getElementById('todo__input')
  const todoAddBtn = document.getElementById('todo__addBtn')
  const todoList = document.getElementById('todo__list')
  const todoForm = document.getElementById('todo__form');

  loadTask();

  todoInput.addEventListener('keydown', function(e){
    const taskContent = todoInput.value.trim();
    if(e.key == "Enter" && taskContent != "" ){
      e.preventDefault();
      addTask(taskContent);
      todoInput.value ="";
      saveTask()
    }
  })        
  
  function addTask(value){
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${value}</span>
      <div>
            <i onclick=editTask(this) class="fa-solid fa-pen-to-square"></i>
            <i onclick=deleteTask(this) class="fa-solid fa-xmark"></i>
      </div>
      `
    todoList.appendChild(li);

    todoForm.style.borderBottomLeftRadius = "0px"
    todoForm.style.borderBottomRightRadius = "0px"
 
  }
  
  function saveTask(){
    const arrTask = [];
     const taskList = todoList.querySelectorAll('li')
    taskList.forEach(function(task){
      arrTask.push(task.textContent);
    })
    localStorage.setItem("tasklist", JSON.stringify(arrTask));
  }

  function loadTask() {
      const arrTask = JSON.parse(localStorage.getItem("tasklist")) || [];
      arrTask.forEach((task) => {
        addTask(task);
      })
  }
  
  window.editTask = function(icon) {
    const li = icon.parentElement.parentElement;
    const textTask = li.querySelector('span');
    const newTextTask = prompt("Task text", textTask.innerText);
    if(newTextTask){
      textTask.textContent = newTextTask;
      saveTask(); 
    }
    
  }
  window.deleteTask = function(icon) {
    const li = icon.parentElement.parentElement;
    if(li){
      todoList.removeChild(li);
      saveTask()
    }
    else{
      todoForm.style.borderBottomLeftRadius = "12px"
      todoForm.style.borderBottomRightRadius = "12px"
      console.log(1)
    }
  }
})