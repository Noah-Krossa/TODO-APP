const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todos')

todoInput.onkeydown = addTodo

function addTodo(e) {
  if (e.code == 'Enter') {
    const {target} = e
    if(!target.value) return
    const ID = Math.random().toString(34).substr(2,9)
    todoList.innerHTML = `<div class="todo-item">
    <div>
      <input type="checkbox" name="" id="${ID}">
      <label for="${ID}">${target.value}</label>
    </div>
    <button> <i class="fas fa-ellipsis-h"></i>
    </button>
  </div>`+ todoList.innerHTML
  target.value = ''
  }
  return
}