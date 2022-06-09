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
const queue = [];
let sum =0;
function getAvg(){
    removeExpired();
    return sum/queue.length;
}
function record(val){
    const now = Date.now();
    queue.push({ts: now, val:val});
    sum+=val;
    removeExpired();
}
function isExpired(obj){
    const now = Date.now();
    const diff = obj.ts -now
    if(diff>300000){
        return true;
    }else{
        return false;
    }
}
function removeExpired(){
    while(queue.length>0 && isExpired(queue[0])){
        const {ts ,val}=queue.unshift();
        sum-=val;
    }
    }

