const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function createTodoItem(text) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        </div>
    `;

    const completeButton = listItem.querySelector('.complete-button');
    const deleteButton = listItem.querySelector('.delete-button');
    const todoSpan = listItem.querySelector('span');

    completeButton.addEventListener('click', () => {
        todoSpan.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    return listItem;
}
