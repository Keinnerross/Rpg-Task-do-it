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



//Task Constructor

class Task{
    constructor(titleTask, descriptionTask,){
        this.titleTask = titleTask;
        this.descriptionTask = descriptionTask;
        

    }
}

//UI Events
class UItask{
    addTask(task){
        const viewTask = document.getElementById('task-content');
        const element = document.createElement('div');
        element.className = 'task';
        element.innerHTML= `
        <input type="checkbox" class="task-complete-false">
        <div class="container">
            <div class="#">${task.titleTask}</div>
            <div class="#">${task.descriptionTask}</div>
        </div>
        <button name="delateTask">x</button>
        `
        viewTask.prepend(element);
    }


    delateTask(element){
        if(element.name === 'delateTask'){
            element.parentNode.remove();
        }
    }

    taskFinish(element){
        const viewTask = document.getElementById('task-content');
        

        
        if(element.className === 'task-complete-false'){
            
            element.parentNode.className='task-completed';
            element.className='task-complete-true'
            viewTask.appendChild(element.parentNode);
        }

        else if(element.className === 'task-complete-true'){
            
            element.parentNode.className='task';
            element.className='task-complete-false'
            viewTask.prepend(element.parentNode);
        }
        
        
    }
}
//DOM Events

// Add Task
document.getElementById('form-task').addEventListener('submit', (e) => {

    const titleTask = document.getElementById('input-task').value;
    const descriptionTask = document.getElementById('input-description').value;
    const completeTask = false;

    const task = new Task(titleTask, descriptionTask,);
    const ui = new UItask();
    ui.addTask(task);

    e.preventDefault();
})

//Delate Task

document.getElementById('task-content').addEventListener('click', (e) => {
    const ui = new UItask();
    ui.delateTask(e.target);
    
})

//Task Complete

document.getElementById('task-content').addEventListener('click', (e) => {
    const ui = new UItask();
    ui.taskFinish(e.target);
})















































// function saveTask(e){

    

    
    
//     const task ={
//         taskValue, //title //
//         descriptionValue //description//
//     };

//     if(localStorage.getItem('tasks') === null ){
//         let tasks = [];
//         tasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     } else {
//        let tasks = JSON.parse (localStorage.getItem('tasks'));
//        tasks.push(task);
//        localStorage.setItem('tasks', JSON.stringify(tasks));
//     }

//     getTask();
// }

// //Get Task//

// function getTask(){
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     let tasksView = document.getElementById('task-content');

//     tasksView.innerHTML = '';

//     for(let i = 0; i < tasks.length; i++){

//         let title = tasks[i].taskValue;
//         let description =tasks[i].descriptionValue;

//         tasksView.innerHTML += `<div class = "task">
//         <button class = "delate-task" onclick = "delateTask('${title}')">
//                 X
//             </button>    
//         <div class = "task-body">
//                 <p>${title} <br> ${description}</p>
                
//             </div>
            

//         </div>`

//     }
// }

// getTask();

// function delateTask(title){
//     let tasks = JSON.parse(localStorage.getItem('tasks'));
//     for (i = 0; i < tasks.length; i++){
//         if (tasks[i].taskValue == title){
//             tasks.splice(i, 1);
//         }
//     }
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     getTask();
// };



  