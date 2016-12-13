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
        removedTodoItem = +ev.target.parentElement.getAttribute('id');

    todos.splice(removedTodoItem, 1);
    localStorage.setItem('todos', JSON.stringify(todos));

    appendCompletedTodosCount();
    listTodos();
}

// Amount of checked TodoItems
function checkTodo(ev) {
    var todos = getTodos(),
        todoId = ev.target.parentElement.getAttribute('id');

    todos[todoId].completed = ev.target.checked;
    localStorage.setItem('todos', JSON.stringify(todos));

    appendCompletedTodosCount();
}

function appendCompletedTodosCount() {
    var todos = getTodos(),
        i = todos.length,
        checkedTodoCount = 0;

    for (;i--;) {
        if (todos[i].completed) {
            ++checkedTodoCount;
        }
    }
    checkedTodoCount = checkedTodoCount || 0;
    document.getElementById('selected-todo-amount').innerHTML = checkedTodoCount + '';
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

function reindexTodos() {
    var todoList = [],
        todoLiList = document.querySelectorAll('li'),
        todoName,
        todoCompleted,
        i = 0,
        len = todoLiList.length;

    for (;i < len; i++) {
        todoName = todoLiList[i].childNodes[1].textContent.trim();
        todoCompleted = todoLiList[i].childNodes[0].checked;

        todoList.push({name: todoName, completed: todoCompleted});
    }

    localStorage.setItem('todos', JSON.stringify(todoList));
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

        html += '<li id="' + i + '" draggable="true" ondragstart="handleDragStart(event)" ondragover="handleDragOver(event)" ondrop="handleDrop(event)"><input type="checkbox" onclick="checkTodo(event)" ' + todoChecked + '> ' + todos[i].name + ' <button onclick="removeTodo(event)">x</button></li>';
    }

    todoList.innerHTML = html;
}

// Init list all Todos
appendCompletedTodosCount();
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

// DnD logic
var dragEl = null;

function handleDragStart(ev) {
    dragEl = ev.target;
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('qqq', dragEl.innerHTML);
}

function handleDragOver(ev) {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDrop(ev) {
    ev.stopPropagation();

    if (dragEl != ev.target) {
        dragEl.innerHTML = ev.target.innerHTML;
        ev.target.innerHTML = ev.dataTransfer.getData('qqq');
    }

    // Save reindexed TodoList to localStorage
    reindexTodos();

    return false;
}
