// no arrow functions
//Regular function returns a reference to the current JavaScript 
//Object but the arrow function returns the reference to the global window object.
//map takes (value, index, array{this})
Array.prototype.newMap =function(callback){
    const result =[];
    for ( let i =0 ; i< this.length; i++){
        if (this.indexOf(this[i]) > -1){
        result [i] = callback(this[i], i,this);}
    }
    return result; 
}
const numbers = [1,2,3,4];
const double = numbers.newMap((item,index)=>{
    return item*2;
})
console.log(double);