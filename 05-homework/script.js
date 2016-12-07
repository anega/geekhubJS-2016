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

    saveTodo(newTodo);
    listTodos();
}

// Validate TodoItem
function todoValidation(val) {
    return val.trim();
}

// Remove TodoItem
function removeTodo(ev) {
    var todos = getTodos(),
        removedTodoItem = ev.target.parentElement.getAttribute('id');

    todos.splice(removedTodoItem, 1);
    localStorage.setItem('todos', JSON.stringify(todos));

    listTodos();
}

// Amount of checked TodoItems
function checkTodo(ev) {
    var todos = getTodos(),
        todoId = ev.target.parentElement.getAttribute('id');

    todos[todoId].completed = ev.target.checked;
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Get TodoList from localStorage
function getTodos() {
    var todosStr = localStorage.getItem('todos');

    return todosStr ? JSON.parse(todosStr) : [];
}

// Save TodoItem to localStorage
function saveTodo(addedTodo) {
    var todos = getTodos();

    todos.push(addedTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// List all Todos saved in localStorage
function listTodos() {
    var todos = getTodos(),
        i = 0,
        len = todos.length,
        html = '',
        todoChecked = '';

    for (;i < len; i++) {
        if (todos[i].completed) {
            todoChecked = 'checked';
        } else {
            todoChecked = '';
        }

        html += '<li id="' + i + '"><input type="checkbox" onclick="checkTodo(event)" ' + todoChecked + '> ' + todos[i].name + ' <button onclick="removeTodo(event)">x</button></li>';
    }

    todoList.innerHTML = html;
}

// Init list all Todos
listTodos();

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
