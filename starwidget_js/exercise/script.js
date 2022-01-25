const starsWrapper= document.querySelector('.starsWrapper');
const stars =document.querySelectorAll('.starsWrapper span');

stars.forEach((star,index ) => {
    star.onclick=()=>{
        starsWrapper.classList.add('disabled');
        stars.forEach((otherStar,otherIndex) => {
            if (otherIndex<=index){
                otherStar.classList.add('active');
            }
    
        })
    }


})