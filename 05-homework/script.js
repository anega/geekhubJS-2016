document.addEventListener('DOMContentLoaded', function () {

    var input = document.getElementById('new-todo');

    function addTodo() {
        var trimmedInputVal = input.value.trim(),
            todoText = document.createTextNode(trimmedInputVal),
            todoItem = document.createElement('li');

        if (trimmedInputVal) {
            todoItem.appendChild(todoText);
            document.getElementById('todo-list').appendChild(todoItem);
        }

        input.value = '';
        input.focus();
    }

    input.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) addTodo();
    });

}, false);