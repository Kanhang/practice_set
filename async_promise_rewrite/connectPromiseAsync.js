
const promiseA = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('hello');
    })
}
const async = async ()=>{
return "word";
}

async function connect(){
    let resA = await promiseA();
    let resb = await async();
    console.log(resA+resb);
}