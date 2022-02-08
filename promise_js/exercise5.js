class MyPromise{
    constructor(fn){    
        this.onResolve= this.resolve.bind(this);
        this.onReject= this.reject.bind(this);
        this.handleError= ()=>{};
        this.promiseChain=[];
        fn(this.onResolve, this.onReject);
    }
    then(handleSuccess){
        this.promiseChain.push(handleSuccess);
      
        return this;
    }
    catch(handleError){
        this.handleError= handleError;
        return this;
    }
    resolve(value){
    let storedValue =value;
    try{
        for(let i=0; i< this.promiseChain.length;i++){
            storedValue = this.promiseChain[i]( storedValue);
        }
     
        return storedValue;
    }
    catch(e){
        this.promiseChain=[];
        this.reject(e);
        return this;
    }        
    }
    reject(e){
        this.handleError(e);
    }
}



//define a promise 

const makeApiCall = ()=>{
    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>{
            let random= Math.random();
            if (random<0.05){
                reject({
                    'statusCode': 404,
                    'error':'not found'
                })
            
            }else{
                resolve({'statusCode':200,
                        'data':{'name':'Thomas Li','age':25}})
            }
        })
    
    })
}

// whether it is resolve(reject) or not , it has to go thru, then 
//and catch to set up everything catch,set up the this handleError
// = handleError we passed it; and reject we used the our handleError 
//passed by catch function, to handle the error,

makeApiCall().then((
res
)=>{

   console.log( res.data.age);
})

.catch((error)=>{
console.log(error.error);
})