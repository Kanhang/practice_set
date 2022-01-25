// 给一个长度为n的数组A，判断是不是由[1,2,...,n]或者
///[n,n-1,...,1]右移得来。比如[4,2,3,1]不是，[4,1,2,3]是
// split the array into 2 parts;
//for loop  1 to length 
// slice part a (0,1)   part b(1,arr.length) 
// temp = [...partb, ... parta]
//for loop  to each element it is an increment, or decrement
// for 0 to length ,check if nums[i]  ===i+1
//for end to 1, check if nums[i ] === i+1
const arr = [4,1,2,3]

for ( let i = 1; i < arr.length ;i++ ){
let partA = arr.slice(0,i);
let partB= arr.slice(i,arr.length);
let temp = [...partB, ...partA];
if (checkincrement(temp)||checkdecrement(temp)){
console.log(true);
}else{
console.log(false);}
}

function checkincrement(arr){
for ( let j = 0 ; j< arr.length ; j++){
    if ( arr[j]!==j+1){
        return false;
    }
}
return true;}

function checkdecrement(arr){
    for ( let j = arr.length-1 ; j>-1 ; j--){
        if ( arr[j]!==j+1){
            return false;
        }
    }
    return true;}