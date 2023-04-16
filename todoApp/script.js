let submitTask = document.querySelector("#addTask");
let incompleteTasks = document.querySelectorAll('.todo-list ul');
let completeTasks = document.querySelectorAll('.complete-list ul');


// let botonesCheck= document.querySelectorAll("");
let ul = document.querySelector("ul");



submitTask.addEventListener('click',(e) =>{
    let newTask = document.querySelector("#new-task").value;
    let newLi= document.createElement('li');
    let newInput = document.createElement('input')
    newInput.setAttribute('type','checkbox')
    let newLabel = document.createElement('label')
    newLabel.textContent=newTask
    newLi.appendChild(newInput);
    newLi.appendChild(newLabel);
    ul.appendChild(newLi);
})





for (var i = 0 ; i < incompleteTasks.length; i++) {

    incompleteTasks[i].addEventListener('click',(e) =>{
        element = e.target
        li = element.parentElement;
        let label =li.children[1].textContent;
    
        CompleteTask(label)
        li.remove();
    })

}


function CompleteTask(label){
    ul = document.querySelector(".complete-list ul")
    textComplete = document.createTextNode(label)
    liTask= document.createElement("li")
    textButton = document.createTextNode("Delete")
    buttonDelete= document.createElement("button")
    buttonDelete.setAttribute("class","delete")
    buttonDelete.appendChild(textButton);
    liTask.appendChild(textComplete)
    liTask.appendChild(buttonDelete)
    ul.appendChild(liTask)
    
    
 }


 for (var i = 0 ; i < completeTasks.length; i++) {

    completeTasks[i].addEventListener('click',(e) =>{
        element = e.target
        li = element.parentElement;
    
        li.remove();
    })

}