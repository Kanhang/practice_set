

Array.prototype.newReduce= function(fn ,initialValue){

    let acc =initialValue ||undefined; 
    for (let i =0;i< this.length; i++){
        if (acc ){
            acc = fn.call(acc, acc ,this[i],i);
        }else{
            acc = this[i];
        }
    }
    return acc;
}

const sum =[1,2,3,4].newReduce((acc,value)=>{
    acc.push(value);
    return acc
},[])
console.log(sum);

const debounce = function(fn, delay){
    let timer = null;
return function(...args){


  
        clearTimeout(timer);
       timer= setTimeout(()=>{
            fn.apply(this, [...args]);
        },delay)
    }
}

function foo (value1,valu2){
    console.log(value1,valu2);
}

const debounced = debounce(foo, 2000);


// setTimeout(()=>{
//     debounced(1,2)
// },100)
// setTimeout(()=>{
//     debounced(3,4)
// },200)
// setTimeout(()=>{
//     debounced(4,5)
// },2500)



function throttle(fn,delay){

    let waiting =false;
    let lastArgs = null;
    return function(...args){
        if (!waiting){
            fn.apply(this,[...args]);
            waiting =true;
          let timer= ()=>setTimeout(()=>{

            if(lastArgs){
                fn.apply(this,[...lastArgs]);
                waiting =false;
                lastArgs=null;
                timer();
            }else{
                waiting =false;
            }
            },delay); 
            timer();
        }
        else{
            lastArgs= [...args];
        }
    }
} 

const throttled = throttle(foo,2000);

setTimeout(()=>{
    throttled(1,2);
},100)
setTimeout(()=>{
    throttled(3,4);
},500)
setTimeout(()=>{
    throttled(5,4);
},800)