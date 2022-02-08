//https://www.codenong.com/jsefd81bed2cbc/

function memo(fn){

const m = new Map();
return function() {
const key = Array.from(arguments).join('');
if (m.has(key)){
    console.log('we are getting from cache not doing calculation')
    return m.get(key);
}
else{
    const value =fn.apply(this,[...arguments]);
    m.set(key,value);
    return value;
}
}
}


const add = (a,b)=>{
 return  a+b;
}

const addFn = memo(add);

//call the addFn;

console.log(addFn(1,3));

console.log(addFn(1,3));
console.log(addFn(3,1));
