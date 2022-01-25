// Given a positive integer n, starting from 0 to n, if the number contains 0, 2, 4, count once. Implement a function that requires returning the count. Examples are:

// n = 100, so from 0 to 100, how many numbers contain the digits 0, 2, 4

const n=10;
let count =0;
for (let i = 0 ;i <= n;i++){
    
    let stringi=  i+"";
    console.log(stringi);
    if( stringi.includes('0') ||stringi.includes('2') ||stringi.includes('4')){
        count+=1;
    }
}
console.log(count);