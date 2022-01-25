
const operators= document.querySelectorAll('.operator');
const nums= document.querySelectorAll('.num');
const equals = document.querySelector('.equals');
const period = document.querySelector('.period');
const clear = document.querySelector('.clear');
const value = document.querySelector('.value');

let cur='';

let stack=[];

//clear should clean cur, reset value and reset stack

clear.onclick= ()=>{
    value.innerHTML="0";
    cur='';
    stack=[];
    }

nums.forEach((num)=>{
num.onclick=()=>{

    cur+=num.innerHTML;
    value.innerHTML=cur;

}
})
operators.forEach((operator=>{
    operator.onclick=()=>{
        console.log('hhas');
        if (cur!==""){
   
        stack.push(cur);
    }
 
    stack.push(operator.innerHTML);
    cur='';
}}))

period.onclick=()=>{
    if (cur && !cur.includes('.')){
        cur+='.'
    }
}

equals.onclick= () => {
    if(cur){
        stack.push(cur);
    }
    //only push valid stirng to stack
   const result= eval(stack.join('')).toString();
   value.innerHTML=result;
   cur='';
   //reset cur after calculation
}


//eval when click '=' 