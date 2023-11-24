const todoList = []

function rendertodolist(){
  let todolistHTML = ''
  for(let i = 0; i<todoList.length; i++){
    const element = todoList[i];
    const html = `<div class='flex-div'>
    <p class='to-do-text'>${element} </p>
    <button class='edit-button'  onclick =' rewrite(${i})
    '>
      Edit
    </button>
    </div>
    `

    todolistHTML += html

  }
  document.querySelector('#todolist').innerHTML = todolistHTML
  // return element
}
function rewrite(index){
  const newName = prompt('text','Enter the new mwssage')
  if(newName !== null && newName !==  ''){
  todoList[index] = newName
  rendertodolist()
  }
  
}



function addtodo(){
  const inputElement = document.querySelector('#input')
  const name = inputElement.value
  todoList.push(name)
  inputElement.value = ''
  rendertodolist()
}
function keyDown(event){
  if(event.key === 'Enter'){
    addtodo()
  }
}