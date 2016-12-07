var todoForm = document.getElementById('todo-form'),
    todoList = document.getElementById('todo-list');

// TodoItem constructor
function Todo(name) {
    this.name = name;
    this.completed = false;
}

// Add TodoItem
function addTodo(name) {
    var newTodo = new Todo(name);
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = checkTodo;
    var span = document.createElement('span'),
        todoName = document.createTextNode(newTodo.name);
    var removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.innerHTML = 'x';
        removeBtn.onclick = removeTodo;

    li.appendChild(checkbox);
    span.appendChild(todoName);
    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
}

// Validate TodoItem
function todoValidation(val) {
    return val.trim();
}

// Remove TodoItem
function removeTodo(ev) {
    var removedTodo = ev.target.parentElement;
    removedTodo.parentElement.removeChild(removedTodo);
    checkTodo(ev);
}

// Amount of checked TodoItems
function checkTodo(ev) {
    var checkedTodos = document.querySelectorAll('input[type=checkbox]:checked');
    document.getElementById('selected-todo-amount').innerHTML = checkedTodos.length + '';
}

// Add TodoItem form submission event, show in todos list
todoForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

    var currTodo = document.getElementById('todo-text');
    var currTodoVal = document.getElementById('todo-text').value;

    if (todoValidation(currTodoVal)) {
        addTodo(currTodoVal);
    }
    currTodo.value = '';
    currTodo.focus();
});
