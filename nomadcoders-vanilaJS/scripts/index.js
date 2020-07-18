const clock = document.querySelector(".clock"),
  nameInputForm = document.querySelector(".name-input-form"),
  todoInputForm = document.querySelector(".todo-input-form"),
  nameInputText = nameInputForm.querySelector(".name-input-text"),
  todoInputText = todoInputForm.querySelector(".todo-input-text"),
  greetingText = document.querySelector(".greeting"),
  todoUl = document.querySelector(".todo-ul");
let todos = [];

function renderClock() {
  const date = new Date();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  clock.innerHTML = `${hour}:${minute}:${second}`;
}

function paintGreetingText() {
  nameInputText.classList.add("invisible");
  greetingText.innerHTML = `Hello, ${localStorage.getItem("name")} !`;
}

function nameInputListener(event) {
  event.preventDefault();
  localStorage.setItem("name", nameInputText.value);
  paintGreetingText();
}

function paintTodo() {
  lis = document.querySelectorAll("li");
  lis.forEach(function (element) {
    if (!element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  });
}

function todoInputListener(event) {
  event.preventDefault();
  const todo = {
    text: todoInputText.value,
    id: todos.length + 1,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoInputText.value = "";
  todo_append(todo.id, todo.text);
  paintTodo();
}

function pushtodos(todo) {
  todos.push(todo);
  todo_append(todo.id, todo.text);
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  todoUl.removeChild(li);
  todos = todos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function todo_append(id, text) {
  const item = document.createElement("li");
  const btn = document.createElement("button");
  item.id = id;
  item.innerHTML = text;
  btn.innerHTML = "❌";
  btn.className = id;
  btn.addEventListener("click", deleteTodo);
  item.appendChild(btn);
  todoUl.appendChild(item);
}

function init() {
  renderClock();
  setInterval(renderClock, 1000);
  if (localStorage.getItem("name") !== null) {
    paintGreetingText();
  } else {
    nameInputForm.addEventListener("submit", nameInputListener);
  }
  todoInputForm.addEventListener("submit", todoInputListener);
  if (localStorage.getItem("todos") !== null) {
    const todos_ls = JSON.parse(localStorage.getItem("todos"));
    todos_ls.forEach(pushtodos);
    paintTodo();
  }
}

init();
