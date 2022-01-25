

// Given a input: the positive integer array A, 
//return an array B, B[i] indicates whether A[i] A[i+1] A[i+2]
// can form a triangle.

let a=[ 1,2,3,5,2,3,4]
// b.length = 5 for 0 to length -2
// if triange  a[i]+ a[i+1] > a[i+2]   &&   a[i]+ a[i+2]  >a[i+1] &&a[i+2]+ a[i+1] > a[i]
let b= [];
for ( let i =0 ; i< a.length-2;i++){
   if( a[i]+ a[i+1] > a[i+2]   &&   a[i]+ a[i+2]  >a[i+1] &&a[i+2]+ a[i+1] > a[i]){
       b. push(true);
   }else{
       b.push(false);
   }
}


console.log(b);












//  counter 

// given array [1,2,3,5,1,2,3,2]

//return count of array


// let array = [1,2,3,5,1,2,3,2]
// let hashmap = new Map();
// for (el of array){
//     if(hashmap.has(el)){

//         hashmap.set(el, hashmap.get(el)+1)
//     }
//     else{
//         hashmap.set(el,1);
//     }
// }
// console.log (hashmap.entries());
            