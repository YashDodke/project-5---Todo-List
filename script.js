const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

function createTodoElement(value) {
  const todo = document.createElement("div");
  const textEl = document.createElement("span");

  textEl.textContent = value;
  todo.appendChild(textEl);

  const closeEl = document.createElement("span");
  closeEl.innerHTML = '&times;';
  closeEl.classList.add("delete");
  closeEl.addEventListener("click", (e) => deleteTodoElement(todo));
  
  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

function deleteTodoElement(todoElement) {
  todos.removeChild(todoElement);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if (!value.trim().length) return;
  todos.appendChild(createTodoElement(value));
  input.value = "";
});
