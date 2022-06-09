//triggered after delay;

function debounce(func,delay) {
let timer =null;
return function(...args){
    console.log(args)
    clearTimeout(timer);
    timer =setTimeout(()=>{
      func.apply(this,args);
    },delay)
} 

}
function test(args) {

    console.log(`iam ${args}`);
}

const debounced = debounce(test,1000);

setTimeout(()=>{
debounced('haha');
    },400)


setTimeout(()=>{
debounced('gaga');
},800)


setTimeout(()=>{
debounced('jaha');
 },2100)
    
        