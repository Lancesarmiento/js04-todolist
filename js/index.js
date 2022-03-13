var form, todoList, button;

form = document.querySelector('form');
todoList = document.querySelector('ul');
button = document.getElementById('clear');

button.disabled = true;

var input = document.getElementById('user-todo');

form.addEventListener('submit', function(event) {
    event.preventDefault();

if (onkeypress == '13')
    button.disabled = true;
    else
    button.disabled = false;
 
    todoMaker(input.value);
    input.value = '';
})

var todoMaker = function(text) {
    var todo = document.createElement('li');
    todo.textContent = text;

    todoList.appendChild(todo);

    todo.style.listStyletype = 'none';

} 

button.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    button.disabled = true;

})