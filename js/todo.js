const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function deleteFilter(item, li) {
    return item.id !== li.id;
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => JSON.stringify(item.id) !== li.id);
    saveToDos();
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "👍";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    todoInput.value = "";
}

todoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}
