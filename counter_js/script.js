

function load(){
 
    const increment= document.querySelector('.increment');
    const decrement = document.querySelector('.decrement');
    
    increment.onclick=()=>{
        let value= document.querySelector('.value');
        let newValue= value.innerHTML-0+1;
        value.innerHTML =newValue.toString();
        ;
    }
    decrement.onclick=()=>{
        let value= document.querySelector('.value');
        let newValue= value.innerHTML-1;
        value.innerHTML =newValue.toString();
        ;
    }
          
    

};


load();