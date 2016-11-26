var input = document.getElementById('todo-text'),
    todoList = document.getElementById('todo-list'),
    removeBtn = document.getElementById('remove-todo'),
    allTodos = document.getElementById('all-todos'),
    totalTodoCount = 0;

// Add todoItem logic
function addTodo() {
    var trimmedTodoText = input.value.trim(),
        textNode = document.createTextNode(trimmedTodoText),
        checkbox = document.createElement('input'),
        todoLi = document.createElement('li');
    checkbox.type = 'checkbox';

    if (trimmedTodoText) {
        todoLi.appendChild(checkbox);
        todoLi.appendChild(textNode);
        todoList.appendChild(todoLi);
        allTodos.innerHTML = ++totalTodoCount;
    }

    input.value = '';
    input.focus();
}

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) addTodo();
});

//