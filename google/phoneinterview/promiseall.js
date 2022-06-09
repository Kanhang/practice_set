function all(promises){
    return new Promise((resolve, reject)=> {
        if (promises.length ===0){  
            resolve([]);
            return; 
        }
        const result = [];
        let countPending = promises.length;
        promises.forEach((promise,index) => {
            // it might have the case the promise 
            //is not a value but also 
            Promise.resolve(promise).then((value)=>{
                result[index]= value;
                countPending --;
                if(result.length ===0) {
                      resolve(result);
                }
            },reject);
            //promise.resolve() returns a promise resolve with ta given value 
        })


    })

}