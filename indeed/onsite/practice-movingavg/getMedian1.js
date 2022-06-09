
let queue = [5,4,3,2,1,6,7,8]
function getMedian(){
//removeExpired();
if(queue.length%2===1){
    const mid = Math.floor(queue.length/2);
    return findKthElement(mid,0 , queue.length-1);
}
else{
    const mid = Math.floor(queue.length/2);
    return (findKthElement(mid-1,0,queue.length-1)+findKthElement(mid,0,queue.length-1))/2;
}

}

function findKthElement(k,l,h){
    const pi = partition(l,h);
    if(pi === k){
        return queue[k]
    }
    if( k<pi){
        return   findKthElement(k,l,pi-1);
    }
    else if (k>pi) {
        return findKthElement(k,pi+1,h);
    }
}

function partition(l,h){
    const pi = queue[h];
    i= l-1;
    for (let j= l;j<h;j++){
        if(queue[j]<pi){
            i+=1;
            [queue[i],queue[j]]= [queue[j],queue[i]]
        }
    }
    [queue[i+1],queue[h]]= [queue[h],queue[i+1]]
    return i+1;
}

console.log(getMedian());