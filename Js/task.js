//popup//

let open = document.querySelector('#open-task');
let close = document.querySelector('#close-task')
let box = document.querySelector('#container-add-task')
let doneButtonTask = document.querySelector('#done-button-task')

open.addEventListener('click', () => {
    box.style.display= 'flex'
});

close.addEventListener('click', () => {
    box.style.display= 'none'
});

doneButtonTask.addEventListener('click', () => {
    box.style.display= 'none'
});



//Save Task//

document.getElementById('form-task').addEventListener('submit', saveTask);

function saveTask(e){

    

    let taskValue = document.getElementById('input-task').value;
    let descriptionValue = document.getElementById('input-description').value;
    
    const task ={
        taskValue, //title //
        descriptionValue //description//
    };

    if(localStorage.getItem('tasks') === null ){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
       let tasks = JSON.parse (localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTask();
}

//Get Task//

function getTask(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('task-content');

    tasksView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){

        let title = tasks[i].taskValue;
        let description =tasks[i].descriptionValue;

        tasksView.innerHTML += `<div class = "task">
        <button class = "delate-task" onclick = "delateTask('${title}')">
                X
            </button>    
        <div class = "task-body">
                <p>${title} <br> ${description}</p>
            </div>
            

        </div>`

    }
}

getTask();

function delateTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (i = 0; i < tasks.length; i++){
        if (tasks[i].taskValue == title){
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
};



  