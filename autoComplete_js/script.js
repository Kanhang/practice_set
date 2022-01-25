
const input = document.getElementById('myinput')
input.oninput=Change;
const mylist = document.getElementById('mylist');
    const data = [
        "Alligator",
        "Bask",
        "Crocodilian",
        "Death Roll",
        "Eggs",
        "Jaws",
        "Reptile",
        "Solitary",
        "Tail",
        "Wetlands"
      ];
let suggestions=data;
suggestions.forEach((suggestion)=>{
    let li = document.createElement('li');
    li.innerHTML= suggestion;
    mylist.append(li)
})
function Change(e){
    input.value=e.target.value;
   console.log(input.value);
    while(mylist.hasChildNodes()){
        mylist.firstChild.remove();
    }
    suggestions= data.filter((datum)=>
datum.toLowerCase().startsWith(input.value.toLowerCase())
    )
    suggestions.forEach((suggestion)=>{
        let li = document.createElement('li');
        li.innerHTML= suggestion;
        li.onclick = function(){
            console.log(li.innerHTML);
            input.value =li.innerHTML;
            while(mylist.hasChildNodes()){
                mylist.firstChild.remove();
            }


        }
        mylist.append(li)
    })
}
;