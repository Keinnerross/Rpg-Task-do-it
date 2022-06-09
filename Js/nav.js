/* Navegation menu trought app */
let task = document.querySelector('#task-nav')
let habits = document.querySelector('#habit-nav');
let random = document.querySelector('#random-nav');


/*sections boxes of menu*/
let sectionTask= document.querySelector('#section-task');
let sectionHabits= document.querySelector('#section-habit');
let sectionRandom= document.querySelector('#section-random');

/*event on click */

task.addEventListener('click', () => {
    sectionHabits.style.display= 'none'
    sectionRandom.style.display= 'none'
    sectionTask.style.display= 'block'

    //Nav Action Styles 
    task.className='nav-action';
    habits.className='nav-noaction';
    random.className='nav-noaction';


});

habits.addEventListener('click', () => {
    sectionTask.style.display= 'none'
    sectionRandom.style.display= 'none'
    sectionHabits.style.display= 'block'

    //Nav Action Styles 
    task.className='nav-noaction';
    habits.className='nav-action';
    random.className='nav-noaction';
    
});

random.addEventListener('click', () =>{
    sectionTask.style.display= 'none'
    sectionHabits.style.display= 'none'
    sectionRandom.style.display= 'block'

    //Nav Action Styles 
    task.className='nav-noaction';
    habits.className='nav-noaction';
    random.className='nav-action';
})




