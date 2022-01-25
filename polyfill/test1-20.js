// bind 
//takes a context as parameter and set current context with context provided
//const module= {
//    'x':10,
//    'getX' :function (){return this.x};
// }

import { element } from "prop-types";

// // const retrieveX = module.getX();
//retrieveX.bind(module)
// so it takes context; 
Function.prototype.newBind =function(context){
    const currentContext= this;
    const currentArguments= [...arguments].slice(1);
    return function(...args){
        return currentContext.apply(context, [...currentArguments, ...args]);
    }
} 
// array.filter( (el)=>el ==="c");
Array.prototype.newFilter =function (fn){
    let result =[];
    for (let i =0;i<this.length; i++){
       let val= fn.call(this,this[i]);
        result.push(val);
    }
    return result;
}

// // array.forEach((el,index)=>{
//     el = -5;
// })

Array.prototype.newForEach=function (fn){
    for (let i=0; i < this.length;i++){
        this[i]= fn.call(this,this[i]);
    }
}

// newMap
Array.prototype.newMap= function (fn) {
for (let i= 0; i<this.length;i++){
    return fn.call(this,this[i]);
}
}


// arr.reduce((acc, el, index)=>{ 
//  acc.push(el)
// return acc;},[])

Array.prototype.newReduce =function (fn ,initialValue){
    let acc = initialValue;

    for (let i = 0; i< this.length;i++){
    if (acc){
    acc= fn.call(this, acc, this[i]);  }
    else{
        acc= [this[i]];
    }  
}
return acc
}

//array.flat(2); 2 means depth

Array.prototype.newFlat= function(depth){
   return depth>0? 
    this.reduce( (acc, value )=>{
        if (Array.isArray(value)){
            acc.push( ...value.newFlat(depth-1))
        }else{
        acc.push(value);}
        return acc
    },[])
    :this
}

let arr =[1,2,[1,2],[1,22,[1,2,[1,2]]]];
console.log(arr.newFlat(5))

///debounce;
//lodash. debounce(fn, 1000)

function debounce(fn,waitTime){
let timer =null;
return function(){ //return a function\
    //we dont need if else for debounce,
    //because wehnever we have timer, we needto clear it, and set the timeout
        clearTimeout(timer);
        timer= setTimeout(()=>{
        fn.apply(this,arguments);
        },waitTime)
        
    }
}
// lodash. throttle ( fn,waiting)
//不是很熟练
function throttle (fn,waitTime){
    let lastArgs=[];
    let wait =false;
    if(!wait){
        wait = true;
        fn.apply(this, lastArgs);
        setTimeout(()=>{
        if(lastArgs.length>0){
        fn.apply(this, lastArgs);
        waiting=false;
        }},waitTime)}
    else{
        lastArgs= arguments;
    }
}