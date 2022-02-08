Array.prototype.newFilter= function(fn){
    let arr=[];
    for (let i =0 ;i< this.length;i++){
    if( fn.call(this,this[i])){
     arr.push(this[i]);
 }
    }
    return arr;

}

const arr =[2,2,2,3,4,1]

let selected =arr.newFilter((value)=>value===2)

console.log(selected);

Array.prototype.nForEach= function(fn){
    for(let i =0 ; i<this.length;i++){
      this[i]= fn.call(this,this[i],i)
    }
}

arr.nForEach((value,index)=>value+1);

console.log(arr);

Array.prototype.newMap = function(fn){
    let arr=[];
    for (let i=0;i<this.length;i++){
    arr.push( fn.call(this,this[i]));
    }
    return arr;
}
let map=arr.newMap((value,index)=>value+1);

console.log(map);

Array.prototype.newReduce = function (fn, initialValue){
    let acc= initialValue || undefined;
    console.log(acc)
    for (let i =0; i<this.length;i++){
        if(acc ){
        acc=  fn.call(acc,acc,this[i])
        }else{
        acc= this[i];
        }  
    }
    return acc
    
}

const sum =[1,2,3,4].newReduce((acc, value)=>{acc.push(value)
    return acc},[]);
console.log(sum);

