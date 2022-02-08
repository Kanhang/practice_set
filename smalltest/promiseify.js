//function promisify takes an argument of any and returns a Promise which resolve to that value;
 
async function call(){
   const foo = await promisify(2);
   console.log(foo)
    const foob=  await promisify(3).then(value=>value+1);
    console.log(foob);
}
// await promisify(2) //return 2
// await promisify(3).then(value=>value+1);


function promisify(arg){
    return Promise((resolve,reject)=>{
        resolve(arg)
    });
}