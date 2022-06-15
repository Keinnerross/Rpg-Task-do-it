
const progressBar = document.getElementById('progress');
let valueProgress = 1;
let valueExp = 10;
let other = valueExp;
let totalValueBar = `${valueExp}%`;

function nextLevel(){
    if(valueExp > 99){
        valueExp = 10;
        progressBar.style.width = valueExp;
        

    }
}

function resta(){
valueExp = valueExp / 2;
    totalValueBar = `${valueExp}%`;
    return totalValueBar;
}

function progressBarSystem(){
    nextLevel();
    progressBar.style.width = totalValueBar; 
    valueExp = valueExp + valueExp;
    totalValueBar = `${valueExp}%`;
    console.log(totalValueBar);
        }

        
function decreaseProgresBarSystem(){
    
    resta();
    progressBar.style.width = totalValueBar;
    
    
    console.log(totalValueBar);
            
        }