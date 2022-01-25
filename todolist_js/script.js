
const lists = document.querySelectorAll('li');
lists.forEach(( list )=>{
    const close= document.createElement('span');
    close.className="close";
    close.innerHTML="x";
    close.onclick=()=>{
    list.style.display="none";
    }
    list.onclick=()=>{
        list.classList.toggle('done');
        
    }
    list.append(close) ;

})
const add = document. querySelector(".add");
const input= document.getElementById("myinput");
add.onclick=()=>{
    let newList = document.createElement('li');
    newList.innerHTML=input.value; 
    const close= document.createElement('span');
    close.className="close";
    close.innerHTML="x";
    close.onclick=()=>{
        newList.style.display="none";
        }
        newList.onclick=()=>{
        newList.classList.toggle('done');  
        }
        newList.append(close);
        document.body.append(newList);
}