let openHabit = document.querySelector('#open-habit');
let closeHabit = document.querySelector('#close-habit')
let boxHabit = document.querySelector('#container-add-habit')
let buttonHabit = document.querySelector('#done_button_habit')

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

        const viewHabit = document.getElementById('habit-content');
        const element = document.createElement('div');
        element.className ="habit";
        element.innerHTML = `
        <button name= "complete">+</button>
        <div class="container">
            <div class="#">${habit.title}</div>
            <div class="#">${habit.description}</div>
        </div>
        <div>
            <div>${habit.habitComplete}</div>
            <div>${habit.habitFail}</div>
        </div>
        <button name= "fail">-</button>
        
        `
        viewHabit.appendChild(element);
    }

    habitComplete(element){    
        
        
        if(element.name === 'complete'){
            
            let valor = parseInt(element.nextElementSibling.nextElementSibling.firstElementChild.textContent) + 1;
            element.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = valor;
            
         }      
    }

    habitFail(element){
        if(element.name === 'fail'){
            let valor = parseInt(element.previousElementSibling.lastElementChild.textContent) -1;
            element.previousElementSibling.lastElementChild.innerHTML = valor;
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

document.getElementById('form-habit').addEventListener('submit', (e) => {

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