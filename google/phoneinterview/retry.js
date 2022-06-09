function retry(fn, n) {
 fn()
    .then((val)=>
    resolve(val))
    .catch(e=>{
      if (n ===0){
       console.log(e)
      } else {
        console.log(n)
        setTimeout(()=>{
            retry(fn,n-1);
        },1000)
      }
    })
   }
   function doStuff(resolve,reject){
     return new Promise((resolve,reject)=>{
     reject('error');
     });
   }


   retry(doStuff,10);