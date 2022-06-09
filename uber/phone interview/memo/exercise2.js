// const invoke = () => {}
// const add = (x, y) => x + y
// invoke(add(1, 2))

// invoke(add(3, 4))
// 说call invoke的时候return expected value 然后call另一个function revoke的时候所有的值变成undefined
// 然后implement这个过程
const add = (a,b)=>{
    return a+b;
}

const m = new Map();
function invoke(fn){
    return function(...args){
        const key = [...args].join('_');
       if(m.has(key)){
           console.log( 'we are getting from cache');
        return m.get(key)
        }
        else{
            console.log('we are calculating it');
            const result = fn.call(this,...args)
            m.set(key,result);
            return result;
        }
    }

}
console.log(invoke(add)(1,2))
console.log(invoke(add)(1,2))
console.log(invoke(add)(1,2))