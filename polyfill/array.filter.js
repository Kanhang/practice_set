import { useCallback } from "react";
//filter takes (value, index, array{this})
// filter will push the value into the
// result that satisfies the callback function.
Array.prototype.newFilter = function(callback){
    const result = [];
    for( let i = 0; i< this.length; i++){
        //first this means context,specifically for call method;
        //second parameter means value, 
        //thrid parameter means idnex, fourth means the arraycalling the function
        if(callback.call(this,this[i],i,this)){
            result.push(this[i])
        }
    };
    return result;
}

const nums=[1,2,3];
const even = nums.newFilter(item => item%2==1);
console.log(even);