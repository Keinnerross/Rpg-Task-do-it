const viewRandom = document.getElementById('random-content');

class UIRandom{
    
        random1(){
            // cambiar por random el task del div
            
                const element = document.createElement('div');
                element.className = "task";
                element.innerHTML=`
                        <input type="checkbox" name="check-random-false">
                        <div class="container">
                            <p>Hola 1</p>
                            <p>My name is Giovanny Giorgio</p>
                        </div>
                    <button name="delateRandom">x</button> 
                `
                viewRandom.prepend(element);
            }

        random2(){
    // cambiar por random el task del div
    
        const element = document.createElement('div');
        element.className = "task";
        element.innerHTML=`
                <input type="checkbox" name="check-random-false">
                <div class="container">
                    <p>Adios 2</p>
                    <p>Painkiller</p>  
                </div>
                    <button name="delateRandom">x</button> 
        `
        viewRandom.prepend(element);
            }
        
        random3(){
        // cambiar por random el task del div
        
            const element = document.createElement('div');
            element.className = "task";
            element.innerHTML=`
                    <input type="checkbox" name="check-random-false">
                    <div class="container">
                        <p>See you tomorrow 3</p>
                        <p>Bate que bate chocolat.</p>  
                    </div>
                    <button name="delateRandom">x</button> 
            `
            viewRandom.prepend(element);
            
            }

        random4(){
            // cambiar por random el task del div
            
                const element = document.createElement('div');
                element.className = "task";
                element.innerHTML=`
                        <input type="checkbox" name="check-random-false">
                        <div class="container">
                            <p>Eureka ☺</p>
                            <p>Rumbo a 4 añoxd</p> 
                        </div>
                        <button name="delateRandom">x</button> 
                            
                `
                viewRandom.prepend(element);
                
            }

        //delate random Funtion
        delateRandom(element){
            if(element.name === 'delateRandom' ){
                element.parentNode.remove();
            }

        }

        randomFinish(element){      

        
            if(element.name === 'check-random-false'){
                
                element.parentNode.className='task-completed';
                element.name='check-random-true';
                viewRandom.appendChild(element.parentNode);
            }
    
            else if(element.name === 'check-random-true'){
                
                element.parentNode.className='task';
                element.name='check-random-false';
                viewRandom.prepend(element.parentNode);
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


