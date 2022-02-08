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
        let tempkey= [...args].join('_');
        if(m.has(tempkey)){
            console.log("we are getting from cache");
            return m.get(tempkey);
        }
        else{
            const res= fn.call(this,...args);
            console.log('we are calculating it')
            m.set(tempkey,res);
            return res;
        }

    }
}

function revoke(){
    m.clear();
}

invoke(add)(1,5);
invoke(add)(2,5);
invoke(add)(1,5);
console.log(m);
revoke();
console.log(m.get('1_5'));
console.log(m);
invoke(add)(1,5);