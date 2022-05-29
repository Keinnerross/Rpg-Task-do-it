const viewRandom = document.querySelector('.random-content');

let jaja = 0;
//Random Task Template
function random1(){
// cambiar por random el task del div

    const element = document.createElement('div');
    element.className = "task";
    element.innerHTML=`
            <input type="checkbox" class="check-random">
            <div class="container">
                <p>Hola 1</p>
                <p>My name is Giovanny Giorgio</p>  
    `
    viewRandom.prepend(element);
}

function random2(){
    // cambiar por random el task del div
    
        const element = document.createElement('div');
        element.className = "task";
        element.innerHTML=`
                <input type="checkbox" name ="delatearbol" class="check-random">
                <div class="container">
                    <p>Adios 2</p>
                    <p>Painkiller</p>  
        `
        viewRandom.prepend(element);
    }

function random3(){
        // cambiar por random el task del div
        
            const element = document.createElement('div');
            element.className = "task";
            element.innerHTML=`
                    <input type="checkbox" class="check-random">
                    <div class="container">
                        <p>See you tomorrow 3</p>
                        <p>Bate que bate chocolat.</p>  
            `
            viewRandom.prepend(element);
            
        }

function random7(){
        // cambiar por random el task del div
        
            const element = document.createElement('div');
            element.className = "task";
            element.innerHTML=`
                    <input type="checkbox" class="check-random">
                    <div class="container">
                        <p>Eureka ☺</p>
                        <p>Rumbo a 4 añoxd</p>  
            `
            jaja=element;
            viewRandom.prepend(element);
            
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

        case 1: random1();  
        break;

        case 2: random2();  
        break;

        case 3: random3();  
        break;

        case 4: random7();
        break;

        case 0: alert('Ya no quedan más misiones');
        break;
    }


})
//Random Delate

document.querySelector('.random-content').addEventListener('click', (e) =>{
    
        
    console.log(delateRandom);

    if(delateRandom.className ==="check-random"){
        jaja.innerHTML='sep';
    }




    // if(element.className ==='check-random
    // const ui = new UI();
    // ui.habitDelate(e.target);
    
});