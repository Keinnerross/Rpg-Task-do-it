const heroName = document.querySelector('.hero-name');
const heroDescription = document.querySelector('.hero-description-text');


// buttons edit

const buttonEditName = document.querySelector('.button-edit-name');
const buttonEditDescription = document.querySelector('.button-edit-description');



//actions Hero Name

buttonEditName.addEventListener('click', ()=>{
    heroName.disabled= false;
    const end = heroName.value.length;
    heroName.setSelectionRange(end, end); 
    heroName.focus();
    heroDescription.disabled= true;

})

heroName.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        heroName.disabled= true;
    }
})

//actions Hero Description

//actions Hero Name

buttonEditDescription.addEventListener('click', ()=>{
    heroDescription.disabled= false;
    const end = heroDescription.value.length;
    heroDescription.setSelectionRange(end, end); 
    heroDescription.focus();
    heroName.disabled= true;

})

heroDescription.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        heroDescription.disabled= true;
    }
})