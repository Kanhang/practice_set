

//reduce takes (accumulator, value ,index ,array//this,initialvalue)


Array.prototype.newReduce= function (callback,initialValue){

     let accumulator = initialValue || undefined;
   //if we have accumulator provided we use accumulator function, other wise we use 
   //first value as initial value; 
    for ( let i =0;  i< this.length; i ++){
    if(accumulator){
        //first acc, means we use accumulator as this, 
        //second regular accumulator
      accumulator=  callback.call(accumulator,accumulator,this[i],i);
     }
     else{
         accumulator=[this[i]]
     }
     }
    return accumulator
}
const nums = [1, 2, 3, 4, 5]
const double = nums.newReduce((accum, current) => {
  accum.push(current * 2)
  return accum
}, []);
console.log(double)
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").newReduce((accum, current) => {
  const splitString = current.split("=")
  accum[splitString[0]] = splitString[1];
  return accum;
}, {})
console.log(queryObject);
