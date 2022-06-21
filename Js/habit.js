let openHabit = document.querySelector('#open-habit');
let closeHabit = document.querySelector('#close-habit')
let boxHabit = document.querySelector('#container-add-habit')
let buttonHabit = document.querySelector('#done-button-habit')

openHabit.addEventListener('click', () => {
    boxHabit.style.display= 'flex'
});

closeHabit.addEventListener('click', () => {
    boxHabit.style.display= 'none'
});

buttonHabit.addEventListener('click', () => {
    boxHabit.style.display= 'none'
});


//* Habit Create

class Habit{
    constructor(title, description, habitComplete, habitFail){
        this.title = title;
        this.description = description;
        this.habitComplete = habitComplete;
        this.habitFail = habitFail;
    }
}

// Interface

class UI{
    addHabit(habit) {
        const formHabit = document.getElementById('form-habit'); // Para vaciar los imputs 
        const viewHabit = document.getElementById('habit-content');
        const element = document.createElement('div');
        element.className ="habit";
        element.innerHTML = `
        <div class="check-container">
        <button name="complete" id="button-plus">+</button>
        </div>
        <div class="container-habit">
            <div class="title">${habit.title}</div>
            <div class="description">${habit.description}</div>
        </div>
        <div class="container-counter">
            <div class="arrow-ico">►►</div>
            <p>${habit.habitComplete}</p>
            <p>ㅤ|</p>
            <p>ㅤ</p>
            <p> -${habit.habitFail}</p>
        </div>
        <div class="delate-container">
        <button name="fail" id="button-less">-</button>
        </div>
        `
        formHabit.reset();  // Para vaciar los imputs 
        viewHabit.appendChild(element);
    }

    habitComplete(element){    
        
        
        if(element.name === 'complete'){
            
            let valor = parseInt(element.parentNode.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent) + 1;
            element.parentNode.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = valor;
            xp = xp + 40;
            progressBarSystem();
            nextLevel();
            
         }      
    }

    habitFail(element){
        if(element.name === 'fail'){
            let valor = parseInt(element.parentNode.previousElementSibling.lastElementChild.textContent) -1;
            element.parentNode.previousElementSibling.lastElementChild.innerHTML = valor;
            decreaseProgresBarSystem();
            }
    }

    habitDelate(element){
        if(element.className === 'habit'){
            element.remove();
        }

    }
}

//Events DOM//

    // Add Habit Event
    const formHabit = document.getElementById('form-habit');
        
    formHabit.addEventListener('submit', (e) => {

    const title = document.getElementById('input-habit').value;
    const description = document.getElementById('input-description_habit').value;
    const habitComplete = 0;
    const habitFail = 0;

    const habit = new Habit(title, description, habitComplete, habitFail);
    const ui = new UI();
    ui.addHabit(habit); 
    

    e.preventDefault();
});

    //Habit Complete Event 

document.getElementById('habit-content').addEventListener('click', (e) =>{
    
    const ui = new UI();
    ui.habitComplete(e.target);
    
});

    //Habit Fail Event
document.getElementById('habit-content').addEventListener('click', (e) =>{
    
    const ui = new UI();
    ui.habitFail(e.target);
    
});

    //habit delate Para remover hay que dar doble click

document.getElementById('habit-content').addEventListener('dblclick', (e) =>{
    
    const ui = new UI();
    ui.habitDelate(e.target);
    
});

//Drag and Drop
let habitList = document.getElementById('habit-content');

Sortable.create(habitList, {
    animation: 150,
    chosenClass: "select-task",
    dragClass: "fantasma"
});
