
document.addEventListener("DOMContentLoaded", function(){
      const todoInput = document.getElementById('todo__input')
      const todoAddBtn = document.getElementById('todo__addBtn')
      const todoList = document.getElementById('todo__list')
      

      // loadTask();

      todoInput.addEventListener('keydown', function(e){
        if(e.key == "Enter"){
          e.preventDefault();
          const taskContent = todoInput.value.trim();
          addTask(taskContent);
          todoInput.value ="";
          saveTask()
        }
      })        
      
      function addTask(value){
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${value}</span>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-xmark"></i>
        `
        todoList.appendChild(li);
      }
      
      function saveTask(){
        const arr = [];
        // todoList.querySelector('li').
      }
})