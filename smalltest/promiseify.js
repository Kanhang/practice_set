//function promisify takes an argument of any and returns a Promise which resolve to that value;
 
const add =(a,b)=> a+b;
const multiply= (c)=>c*2;

async function call(){
const foo = await promisify(add)(1,1); 
console.log(foo);
  const haha= await promisify(multiply)(3).then(val=>val+1)
  console.log(haha);// should return 7
}

function promisify(fn){
    return function(...arg2){
 const res= fn.call(this,...arg2);
 return new Promise((resolve, reject)=>{resolve(res)});
    }
}

call()
