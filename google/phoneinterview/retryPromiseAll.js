function retryPromiseAll(promises){

    let start = Date.now();
    let result =[];
    
    return new Promise((resolve,reject)=>{
     promises.forEach((promise,index)=>{
            retry(promise,start).then((val)=>{
                result[index]= val;
                if(result.length === promises.length) {
                    resolve(result)
                }
            },(e)=>{
                console.log(e)
                reject(e);
            });
        })
    
    })
}

function retry(promise, start){
  return new Promise((resolve,reject)=>{
    console.log(promise)
 Promise.resolve(promise).then(val=>{
   setTimeout(() => {
        resolve(val);  
},1000);

    },(e)=>{
        setTimeout(() => {
            const now = Date.now();
            if((now-start)>1000*6){
                reject('timeout');
            }
            else{
                retry(promise,start);
            }
    },1000);
        
    })
    
    
    .catch(e=>{
        console.log(e);
    })
  }
  )  
}

// retryPromiseAll([1,2,Promise.reject('error')]).then(result=>{
//   console.log(result);
// })

retryPromiseAll([1,2,3]).then(result=>{
    console.log(result);
  })