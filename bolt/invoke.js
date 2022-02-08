// const invoke = () => {}
// const add = (x, y) => x + y
// invoke(add(1, 2))

// invoke(add(3, 4))
// 说call invoke的时候return expected value 然后call另一个function revoke的时候所有的值变成undefined
// 然后implement这个过程


//invoke(add)(1,2)
let expected = undefined;
let a,b= undefined;
const add = (a,b)=>a+b;
const invoke =(fn )=>{

    return function(a,b){
    return fn.call(this,a,b);
    }
}