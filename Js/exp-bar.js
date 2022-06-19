
const progressBar = document.getElementById('progress');
const levelValue = document.querySelector('.level-value');
//vars

let lvl = 1;

let xp = 0;

let maxXp= lvl * 100;

function nextLevel(){
           if(xp >= maxXp){
            progressBarSystem();
            xp = 20;
            lvl++;
            maxXp= lvl * 100;
            levelValue.innerHTML = lvl;
            setTimeout(progressBarSystem, 200);            
            // console.log(xp,lvl,maxXp)
           }

    }

function progressBarSystem(){

    progressBar.style.width = `${xp / maxXp * 100}%`; 
    console.log(xp);
        }

        
function decreaseProgresBarSystem(){
    if(xp <= 20){
        lvl--;
        maxXp= lvl * 100;
        xp = 80 * lvl;
        levelValue.innerHTML = lvl;
        progressBarSystem();
        }
    else if(xp > 20){
        xp = xp -40;
        progressBarSystem();
        }      
    }