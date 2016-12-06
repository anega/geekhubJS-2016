// (function () {

    var todos = [],
        todoForm = document.getElementById('todo-form'),
        todoList = document.getElementById('todo-list'),
        checkedTodos = 0;

    // TodoItem constructor
    function Todo(name) {
        this.name = name;
        this.completed = false;
    }

    // Add TodoItem
    function addTodo(name) {
        var newTodo = new Todo(name);
        todos.push(newTodo);
    }

    // Validate TodoItem
    function todoValidation(val) {
        return val.trim();
    }

    // Remove TodoItem
    function removeTodo(ev) {
        var removedTodo = ev.target.parentElement;
        removedTodo.parentElement.removeChild(removedTodo);
    }

    // Amount of checked TodoItems
    function checkTodo(ev) {
        ev.target.checked ? ++checkedTodos : --checkedTodos;
        document.getElementById('selected-todo-amount').innerHTML = checkedTodos + '';
    }

    // Show Todos list
    function listTodos() {
        var len = todos.length,
            i = 0,
            html = '';

        for (; i < len; i++) {
            html += '<li><input type="checkbox" onclick="checkTodo(event)"/> ' + todos[i].name + ' <button class="remove-todo" onclick="removeTodo(event)">x</button></li>';
        }

        todoList.innerHTML = html;
    }

    // Add TodoItem form submission event, show in todos list
    todoForm.addEventListener('submit', function (ev) {
        ev.preventDefault();

        var currTodo = document.getElementById('todo-text');
        var currTodoVal = document.getElementById('todo-text').value;

        if (todoValidation(currTodoVal)) {
            addTodo(currTodoVal);
            listTodos();
        }
        currTodo.value = '';
        currTodo.focus();
    });

// }());