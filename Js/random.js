const viewRandom = document.querySelector('.random-content');


//Random Task
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
                <input type="checkbox" class="check-random">
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





document.getElementById('open-random').addEventListener('click', (  ) => {

    const count = Math.ceil( Math.random()* 3);
    let n = 0;
    const uno = 1;
    const dos = 2;
    const tres = 3;

       
    

})

