document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const li = document.createElement('li');
        li.classList.add('todo-item');
  
        const span = document.createElement('span');
        span.textContent = todoText;
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
  
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
  
        deleteBtn.addEventListener('click', function() {
          li.remove();
        });
      }
    }
  
    addBtn.addEventListener('click', addTodo);
  
    todoInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === 'Return') {
        addTodo();
      }
    });
  });
  