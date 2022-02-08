


const add =(a,b)=> a+b;
const multiply= (c)=>c*2;

call()
async function call(){
const foo = await promisify(add)(1,1);  //return 2
const haha= await promisify(multiply)(3).then(val=>val+1)// should return 7
}

function promisify(fn){
    return function(...args){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res = fn.call(this,...args);
            resolve(res);
        },1000)
    })
    }
    
}

promisify(add)(1,2).then((res)=>{
    console.log(res )
})