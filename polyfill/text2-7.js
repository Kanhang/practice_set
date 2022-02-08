
Array.prototype.newReduce=function(fn, initialValue){

    let acc= initialValue || undefined;
    for ( let i =0 ;i< this.length;i++){
    if(acc){
     acc=   fn.call(acc,acc,this[i],i)  
    }
       else{
           acc= this[i];
       }
    }
    return acc;

}


const arr= [1,2,3,4,5];
const add= (acc,value,index)=>{
    //console.log(index)
    return acc+value;
}
let sum = arr.newReduce(add,0)
//console.log(sum);


Function.prototype.newBind= function(context){
    let currentcontext = this;
    let currentArgs = [...arguments].slice(1);
    return function(...args){
        //error , need to return result here;
      return  currentcontext.apply(context, [...currentArgs, ...args]);
    }
}

const mod = {
    x:20,
    getX: function(){
        console.log([...arguments]);
        return this.x;
    }
}
const retriveX = mod.getX;
const bindX = retriveX.newBind(mod, 1,2,3,4);

console.log(bindX(5,6,7));



let arr1 =[1,[2,3,1,2,[2,3,[3,[2]]],[2,2]]];


Array.prototype.newFlat = function(depth){
    return depth>0?
    this.reduce((acc,value)=>{
    return [...acc, ...(Array.isArray(value)?value.newFlat(depth-1):[value])]
    },[])    
    :this
}

console.log(arr1.newFlat(5));