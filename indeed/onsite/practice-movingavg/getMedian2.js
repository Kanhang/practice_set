const  queue =[2,3,9,4,5,1,6,7,8];


function getMedian(){
   // removeExpired();
    if (queue.length>0 && queue.length%2===0){
        const mid = Math.floor(queue.length/2);
        return (findKthElement(mid,0,queue.length-1)+ findKthElement(mid-1,0,queue.length-1))*0.5;

    }
    else {
        const mid = Math.floor(queue.length/2);
        return findKthElement(mid,0,queue.length-1);
    }
}

function findKthElement(k,l,h){
    const pi = partition(l,h);
    if(k === pi){
        return queue[k];
    }
    if ( k<pi){
        return findKthElement(k,l,pi-1);

    }
    else if ( k>pi){
        return findKthElement(k,pi+1,h);
    }
}

function partition(l,h){
    const pi= queue[h];
    let i = l-1;
    for ( let j =l; j< h;j++){
        if(queue[j]<pi){
        i+=1;
        [queue[j],queue[i]]= [queue[i],queue[j]];
        
        }
    }
    [queue[h],queue[i+1]]=[queue[i+1],queue[h]];
    return i+1;
}
console.log(getMedian());