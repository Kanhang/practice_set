// Given a list[ [s,e],[s1,e2],[s2,e2]]. Return the frequency of intervals

// [[0,3],[1,4],[2,7]]

// [0,1]->1
// [1-2]-> 2
// [2-3]-> 3
// [3-4]-> 2
// [4-7]->1

// var timeline = {
//   0:1,
//   3:-1,
//   1:1,
//   4:-1,
//   2:1,
//   7:-1
// }
// [0,1,2,3,4,7]
//
// prev  count  k  start    res  start,k,prev
// 0      1     0    0
// 1      2     1    1              (0,1,1)
//2       3     2    2              (1,2,2)
//3       2     3    3               (2,3,3)   
//2       1     4    4               (3,4,2)
//1       0     7    7               (4,7,1)
let arr= [[0,3],[1,4],[2,7],[1,4],[1,4]]
let timeline  = {};
for(let i= 0;i< arr.length;i++){
     let start = arr[i][0]+'';
     let end = arr[i][1]+'';
     if (!timeline[start]){
         timeline[start] =0;
     }
     if(!timeline[end]){
         timeline[end]=0;} 
    timeline[ start] +=1;
    timeline[ end ] -=1;
}
console.log(timeline);
let count= 0;
let start = null;
let res=[]
Object.keys(timeline).forEach((k)=>{

    let prev= count; 
    count += timeline[k];
    if(start !==null){
        res.push([start, k ,prev]);
    }
    start =k;
})
console.log(res);