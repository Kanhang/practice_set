
//reduce

//erro1 arrow function points to global object
Array.prototype.newReduce =function (fn , initialValue){
 let acc = initialValue || undefined;

 this.forEach((value)=>{
     
        if(!acc){
            acc= value;
        }
        else{
            acc=  fn.call(this,acc,value);
        }

    })
    return acc;
}
const nums =[1,2,3,4];

const output =nums.newReduce((acc,value)=>{
    return acc+value;

},0)

console.log(output)


const arr= [1,2,[2,3,[2,3,[3]]]]
Array.prototype.newFlat =function(depth){
//    console.log(this,'ga');   
  return  depth>0?
    this.reduce((acc,value)=>{ 
        Array.isArray(value)?acc.push(...value.newFlat(depth-1)):acc.push(value);
    return acc;
    
    },[])
:
this
}


Function.prototype.newBind= function(context){
    let currentContext = this ;
    let currentArg = [...arguments].slice(1);
    console.log('ff');
    return function(...args){
        console.log([...currentArg,...args]);
      currentContext.apply(this, [...currentArg,...args]);
    }
    
    }

    const obj ={
        x:20,
        getX:function(){
            return this.x;
        }
    } 
    const retrieveX = obj.getX;    
 const bindX=   retrieveX.newBind(obj,101); //bind return a func
bindX(100);
    
    