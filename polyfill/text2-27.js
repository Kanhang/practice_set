// //bind 
// // pass the context to current context, and combine args
// Function.prototype.newBind = function(context){
//     const currentContext = this;
//     const currentArgs= [...arguments].slice(1);
//     return function(...args){
//     return currentContext.apply(context, [...currentArgs,...args]);
//     }
// }
// const obj= {
//     x:100,
//     getX: function(){
//         console.log(...arguments);
//         return this.x;
//     }
// }
// //console.log(obj.getX());
// const getXFn = obj.getX;
// //console.log(getXFn());
// const boundGetX = getXFn.newBind(obj,4,5,6);
// console.log(boundGetX(7,8));

//filter
// const arr= [1,2,3,4,5];
// //let filtered= arr.filter((el)=>el>2);

// Array.prototype.newFilter= function(fn){
//     const res=[];
//     for(let i = 0 ; i< this.length;i++){
//       if(fn.call(this,this[i])){
//           res.push(this[i]);
//       }
//     }
//     return res;
// }
// let filtered= arr.newFilter((el)=>el>2);
// console.log(filtered);

//forEach
//let arr= [1,2,3,4,5];
// arr.forEach((el,index)=>{
//     this[index]+=5;
// })

// Array.prototype.newForEach = function(fn) {
//     for(let i =0; i <this.length;i++){
//      fn.call(this, this[i],i);
//     }
// }
// arr.newForEach((el,index)=>{
//     arr[index]+=5;
// })

//map
// let arr =[1,2,3,4,5];
// const newArr =arr.map((el,index)=>{
//         return el+5;
// })
// console.log(newArr)

// Array.prototype.newMap = function (fn){
//     const res=[];
//     for (let i = 0; i< this.length;i++){
//       res.push(  fn.call(this,this[i],i))
//     }
//     return res;
// }
// const newArr =arr.newMap((el,index)=>{
//     return el+5;
// })
// console.log(newArr)
//reduce

Array.prototype.newReduce = function (fn,initial){
    let acc =initial || undefined;
    console.log(initial,acc);
    for (let i=0;i< this.length; i++){
        if (acc){
            acc= fn.call(acc,acc ,this[i],i) 
        }
        else{
            acc = this[i];
        }
    }
return acc;
}

let arr =[1,2,3,4,5]; 
const res = arr.newReduce((acc,el,index)=>{
  acc= acc+el;
  return acc;

},0)

const fod= arr.newReduce((acc,el, index)=>{
    acc .push(el)
    return acc;
},[])
console.log(res);
console.log(fod)


//flat