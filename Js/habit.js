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



//Save Task//

document.getElementById('form-habit').addEventListener('submit', saveHabit);

function saveHabit(e){

    

    let habitValue = document.getElementById('input-habit').value;
    let descriptionValueHabit = document.getElementById('input-description_habit').value;
    
    const habit ={
        habitValue, //title //
        descriptionValueHabit //description//
    };

    if(localStorage.getItem('habits') === null ){
        let habits = [];
        habits.push(habit);
        localStorage.setItem('habits', JSON.stringify(habits));
    } else {
       let habits = JSON.parse (localStorage.getItem('habits'));
       habits.push(habit);
       localStorage.setItem('habits', JSON.stringify(habits));
    }

    getHabit();
}

//Get Task//

function getHabit(){
    let habits = JSON.parse(localStorage.getItem('habits'));
    let habitsView = document.getElementById('habit-content');

    habitsView.innerHTML = '';

    for(let i = 0; i < habits.length; i++){

        let title = habits[i].habitValue;
        let description =habits[i].descriptionValueHabit;

        habitsView.innerHTML += `<div class = "habit">
        <button class = "delate-habit" onclick = "delateHabit('${title}')">
                X
            </button>    
        <div class = "habit-body">
                <p>${title} <br> ${description}</p>
            </div>
            

        </div>`

    }
}

getHabit();

function delateHabit(title){
    let habits = JSON.parse(localStorage.getItem('habits'));
    for (i = 0; i < habits.length; i++){
        if (habits[i].habitValue == title){
            habits.splice(i, 1);
        }
    }
    localStorage.setItem('habits', JSON.stringify(habits));
    getHabit();
};