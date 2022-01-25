
Array.prototype.newFilter = function (callback){

    let result =[]; 
for( let i = 0; i < this.length ; i ++ ){
    //filter returns boolean
  if ( callback.call(this[i],this[i], i ,this[i] )){
      result.push(this[i]);
  }
}
return result;
}

Array.prototype.newBind = function ( context ){
    const currentContext= this ;
    const currentArgs= [...arguments];
    return function ( ...args) {
        return currentContext.apply(context, [...currentArgs, ... args]);
    }
}

Array.prototype.newForEach= function (callback){
    for ( let i =0; i < this.length; i ++ ){
        //error 1 needs to reset the element, because foreach is built in; 
      this[i]=  callback.call( this[i], this[i], i , this[i] );
    }
}

Array.prototype.newMap= function ( callback){
    //because map return new array 
    let res=[];
    for ( let i =0 ; i < this.length;i++){
        res.push (callback.call(this[i], this[i], i, this[i]));
    }
}

Array.prototype.newReduce = function (callback, initialValue){
    //because it has accumulator and intital value
   let accumulator = initialValue || undefined;
   //errror 1 lenght
   for ( let i =0 ; i < this.length; i++){
    if (accumulator ){
        accumulator = callback.call(accumulator,accumulator,this[i],i );   
        }
        else{
            accumulator = this[i];
        }
   }
    return accumulator
}

Array.prototype.newFlat = function (){
    let flatten = [];
    for (let i= 0; i < this.length ;i ++){
        if (Array.isArray(this[i])){
            //error2 this.newFlat returns array so we need to add ...
            flatten.push(...this.newFlat.call(this[i]));
        }
        else{
            flatten.push(this[i]);
        }
    }
    return flatten; 
}

Array.prototype.newFlat = function(depth){

    return depth >0 ? 
   this.reduce((accumulator, value)=>{
    return [...accumulator, ...(Array.isArray(value)?value.newFlat(depth-1):[value])]
   },[]):
    this
    };