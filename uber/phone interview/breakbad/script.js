// Given a list of chemical elements:
// const elements = [{"symbol":"H","name":"Hydrogen"},{"symbol":"He","name":"Helium"},{"symbol":"Li","name":"Lithium"},{"symbol":"Be","name":"Beryllium"},{"symbol":"B","name":"Boron"}...];
// create an input textfield where based on the user input it outputs the user input to an area on the DOM.
// If the entered text contains a match with any of the symbols, create a border around those characters.
// Constraints:
// - longer element symbols should take precedent over shorter ones. ( For example: 2 letter characters should take precedent over 1 character:   [Br]eaking not [B]reaking )
// - there should be no overlap


const userinput = document.getElementById('userInput');
const output= document.getElementById('output');

const elements = [{"symbol":"H","name":"Hydrogen"},{"symbol":"He","name":"Helium"},{"symbol":"Li","name":"Lithium"},{"symbol":"Be","name":"Beryllium"},{"symbol":"B","name":"Boron"}];
let arr =[]; 

// console.log(typeof elements);
Object.keys(elements).forEach(value=>{
   arr.push(elements[value].symbol);
})

sorted_arr=arr.sort((a,b)=>b<a?-1:1);
console.log(sorted_arr)
userinput.addEventListener('click',(e)=>{
    let temp=  userinput.value;
    let copy_temp;
    let res="";
    for (let i=0; i < sorted_arr.length;i++){
    let starting=0;
    let endpoint=0;
   copy_temp=[...temp];
    while( starting < temp.length && starting !==-1){
      console.log('jhha');
      starting=  temp.valuex.indexOf(sorted_arr[i],starting);
      console.log(starting)
      if(starting>-1){
          endpoint= starting+ sorted_arr[i].length;
          console.log(endpoint,sorted_arr[i])
          if(copy_temp[starting]!=="[" && copy_temp[endpoint]!=="]"){
            copy_temp.splice(endpoint,0,']');
            copy_temp.splice(starting,0,'[');
       
          console.log(copy_temp);
          starting+=endpoint;
        }
      }

    }
    }

});

//brealing bad
//[]
