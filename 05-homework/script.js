var input = document.getElementById('todo-text'),
    todoList = document.getElementById('todo-list'),
    allTodos = document.getElementById('all-todos'),
    selectedTodos = document.getElementById('selected-todos'),
    totalTodoCount = 0,
    selectedCount = 0;

// Add todoItem logic
function addTodo() {
    var trimmedTodoText = input.value.trim(),
        textNode = document.createTextNode(trimmedTodoText),
        checkbox = document.createElement('input'),
        removeBtn = document.createElement('button'),
        todoLi = document.createElement('li');
    checkbox.type = 'checkbox';
    removeBtn.type = 'button';
    removeBtn.innerHTML = 'Remove todo';

    // Remove todoItem logic
    removeBtn.onclick = function (event) {
        var removedTodo = event.target.parentElement,
            isSelected = removedTodo.getElementsByTagName('input')[0].checked;
        removedTodo.parentElement.removeChild(removedTodo);
        allTodos.innerHTML = --totalTodoCount;
        if (isSelected) selectedTodos.innerHTML = --selectedCount;
    };

    checkbox.addEventListener('change', function (event) {
        selectedCount = this.checked ? ++selectedCount : selectedCount > 0 ? --selectedCount : selectedCount;
        selectedTodos.innerHTML = selectedCount;
    });

    if (trimmedTodoText) {
        todoLi.appendChild(checkbox);
        todoLi.appendChild(textNode);
        todoLi.appendChild(removeBtn);
        todoList.appendChild(todoLi);
        allTodos.innerHTML = ++totalTodoCount;
    }

    input.value = '';
    input.focus();
}

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) addTodo();
});