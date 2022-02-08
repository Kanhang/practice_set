const AsyncAdd= function add(a,b){
    setTimeout(()=>{
        return a+b;
    })
}


function memo(fn){
const m = new Map();
return function(){
let key = Array.from(arguments).join('_');
if (m.has(key)){
    console.log('we are getting from memo but not calculation');
    return m.get(key);
}else{
    console.log('doing calculation');
    let value =fn.apply(this,[...arguments]);
    m.set(key,value);
    return value;
}
}
}

const memorized = memo(AsyncAdd);

    memorized(1,2);
memorized(1,2);