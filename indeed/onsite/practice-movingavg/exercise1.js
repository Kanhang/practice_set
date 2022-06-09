// Given a stream of input, and a API int getNow() to get the current time stamp,
// Finish two methods:

// 1. void record(int val) to save the record.
// 2. double getAvg() to calculate the averaged value of all the records in 5 minutes.


// 1.memory不够大怎么办（数据点非常密集，5分钟就把内存爆了）
// 2.getMedium方法实现
// 需要注意的是follow up都是在原有的代码基础上做改进。

// 对于1的方法，数据点密集的话，选择10秒的时间段，合并数据，得到一个10秒的和和数据数量，那么queue
// size就被一个int变量替换掉，这样丢掉过期数据的时候要更新sum和数据总和。这样会造成一定的偏差，
// 但是没办法，条件不好内存不够就忍忍吧。

// 对于2，就是quick select的find kth in an array的方法。复杂度是O(n).
// O(N)

let sum = 0;
let queue=[5,2,1,6,7,4,8,3];
let dsize= 0;

function record(val){
    removeExpired();
    const now = Date.now();
    if(queue.length>0 && !isExpired(queue[queue.length-1],5000)){
        queue[queue.length-1].size+=1
        queue[queue.length-1].val+=val;
    }
    else {
    queue.push({ts:now, val: val , size:1 });}
    sum+=val;
    dsize+=1;
}
function isExpired(obj,t){
    const now = Date.now();
    if( now - obj.ts> t){
        return true;
    }else{
        return false;
    }
}
function removeExpired(){
    while(queue.length>0 && isExpired(queue[0],10000)){
        const {ts , val, size }= queue.shift();
        dsize-=size;
        sum-=val;
    }
}
function getAvg(){

    removeExpired();
    if(queue.length>0){
    return sum/dsize;}
    else{
        return 0;
    }
}


function getMedian(){
    
    removeExpired();
    if(queue.length %2 ===1){
        const mid = Math.floor(queue.length/2);
        return findKthElement(mid,0,queue.length-1)
    }
    else {
        const mid = Math.floor(queue.length/2);
        return (findKthElement(mid-1,0,queue.length-1)+findKthElement(mid,0,queue.length-1))/2
    }
}

function findKthElement(k,l,h){

const  pi = partition(l,h);

if(pi === k){
    return queue[k];
}
if(k<pi){
   return  findKthElement(k,l, pi-1);
}else{
   return  findKthElement(k,pi+1,h);
}
}



function partition(l,h){
    const pi = queue[h];
let i = l-1;
 for (let j = l;j<h;j++){
     if(queue[j]< pi){
         i+=1;
         [queue[i],queue[j]]= [queue[j],queue[i]];
     }
 }
 [queue[h],queue[i+1]]= [queue[i+1],queue[h]];
 return i+1;
}

console.log(getMedian())
// setTimeout(()=>{
//     record(10)
//     console.log(queue,sum,dsize,getAvg())
// },100)

// setTimeout(()=>{
//     record(8)
//     console.log(queue,sum,dsize,getAvg())
// },300)

// setTimeout(()=>{
//     record(12)
//     console.log(queue,sum,dsize,getAvg())
// },4000)

// setTimeout(()=>{
//     record(15)
//     console.log(queue,sum,dsize,getAvg())
// },6300)

// setTimeout(()=>{
//     record(1)
//     console.log(queue,sum,dsize,getAvg())
// },13300)
