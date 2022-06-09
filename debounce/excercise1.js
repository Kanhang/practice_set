
function debounce(func,delay )  {
    let timer =null;
    return function (...args){
        if(timer){
            clearTimeout(timer);
        }
        timer =setTimeout(()=>{
            func.call(this, ...args);
        }, delay);
    }

}

const func = (arg)=>{
    console.log(arg);
}
const debounced = debounce(func,1000);

setTimeout(()=>{
    debounced(1);
},500);

setTimeout(()=>{
    debounced(2)
},800);

setTimeout(()=>{
    debounced(3)
},1900);
