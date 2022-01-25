const starsWrapper= document.querySelector('.stars');

const stars = document.querySelectorAll('.stars a');
stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
    //to disable rating
    starsWrapper.classList.add('disabled');
//to remain active when we move the mouse away

stars. forEach((otherStar,otherIdx)=>{
    if (otherIdx<=index){
        otherStar.classList.add("active");
    }
}) //second error ,we need to place in the onclick method, because the fixed stars process
//should begin after clicked is starting.
        console.log(`star of indecx ${index} was clicked`);
//post to backend your star banking
    });

})