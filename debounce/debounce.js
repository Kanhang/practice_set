

function debounce(func, delay){
let timer = null;
return function (){
    //when it comes to clearTime, it shall be a timer, not a function,
    //but it is a throttle we can use function to include interval, so we can call it again
    clearTimeout(timer); //it has to
    timer= setTimeout(()=>{
        console.log(arguments, Array.isArray(arguments));
        func.apply(this, [...arguments]);
    },delay);
}
}
const api= ( arg)=>{
    console.log('executing api');
    console.log(arg);
}
const debounced= debounce(api,1000);

setTimeout(()=>{
    debounced(5)
},100)
setTimeout(()=>{
    debounced(10 )
},500)
setTimeout(()=>{
    debounced(15)
},800)