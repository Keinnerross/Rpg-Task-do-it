const viewRandom = document.getElementById('random-content');

class UIRandom{
    
        random1(){
            // cambiar por random el task del div
            
                const element = document.createElement('div');
                element.className = "task";
                element.innerHTML=`
                <div class="check-container">
                <div class="task-complete-false"></div>
                </div>
                <div class="container-task">
                <p class="title">Escala una montaña</p>
                <p class="description">Conquista la cima &#x26F0;&#xFE0F;</p>
            </div>
                        <div class="delate-container">
            <button class="delateTask"name="delateRandom">x</button>
            </div> 
                `
                viewRandom.prepend(element);
            }

        random2(){
    // cambiar por random el task del div
    
        const element = document.createElement('div');
        element.className = "task";
        element.innerHTML=`
                <div class="check-container">
                <div class="task-complete-false"></div>
                </div>
                <div class="container-task">
                <p class="title">Ve de pesca</p>
                <p class="description">Consigue provisiones</p>
                </div>
                <div class="delate-container">
                <button class="delateTask"name="delateRandom">x</button>
                </div> 
        `
        viewRandom.prepend(element);
            }
        
        random3(){
        // cambiar por random el task del div
        
            const element = document.createElement('div');
            element.className = "task";
            element.innerHTML=`
                <div class="check-container">
                <div class="task-complete-false"></div>
                </div>
                <div class="container-task">
                <p class="title">Corre 3Km</p>
                <p class="description">Entrena como un Dios</p>
                </div>
                <div class="delate-container">
                <button class="delateTask"name="delateRandom">x</button>
                </div> 
            `
            viewRandom.prepend(element);
            
            }

        random4(){
            // cambiar por random el task del div
            
                const element = document.createElement('div');
                element.className = "task";
                element.innerHTML=`
                <div class="check-container">
                <div class="task-complete-false"></div>
                </div>
                <div class="container-task">
                <p class="title">Tomate una foto</p>
                <p class="description">Ama quien eres ♥</p>
            </div>
                        <div class="delate-container">
        <button class="delateTask" name="delateRandom">x</button>
        </div>             
                `
                viewRandom.prepend(element);
                
            }

        //delate random Funtion
        delateRandom(element){
            if(element.name === 'delateRandom'){
                element.parentNode.parentNode.remove();
            }
        }

        randomFinish(element){
            const viewTask = document.getElementById('task-content');
            
            if(element.className === 'task-complete-false'){
                
                element.parentNode.parentNode.className='task-completed';
                element.className='task-complete-true'
                
            }
    
            else if(element.className === 'task-complete-true'){
                
                element.parentNode.parentNode.className='task';
                element.className='task-complete-false'
                
            }
            
            
        }
    }






//delate random

//Random count 
        const nums = [1,2,3,4]
        const ranNums =[];
        let i = nums.length;
        j = 0;
        let stopCount = 0;

        function count(){
            
            if( i > 0){
                i = i -1;
                j = Math.floor(Math.random() * (i+1));
                ranNums.push(nums[j]);
                nums.splice(j,1);
                console.log(ranNums);
            }
        }

//DOM Events
document.getElementById('open-random').addEventListener('click', (  ) => {

    const ui = new UIRandom();
    count();  
    let valueCount = ranNums[ranNums.length -1]; 
          if(ranNums.length > 3){
              stopCount++
         }

         if(stopCount > 1){
             valueCount = 0;
         }
         
        
    //Condiciones 
        switch(valueCount){

        case 1: ui.random1();  
        break;

        case 2: ui.random2();  
        break;

        case 3: ui.random3();  
        break;

        case 4: ui.random4();
        break;

        case 0: alert('Ya no quedan más misiones');
        break;
    }
});

//delate Random Misions

document.getElementById('random-content').addEventListener('click', (e) =>{
    
    const ui = new UIRandom();
    ui.delateRandom(e.target);
    
});
//Task Complete

document.getElementById('random-content').addEventListener('click', (e) =>{
    
    const ui = new UIRandom();
    ui.randomFinish(e.target);
    
});

//Drag and Drop
let randomList = document.getElementById('random-content');

Sortable.create(randomList, {
    animation: 150,
    chosenClass: "select-task",
    dragClass: "fantasma"
});



