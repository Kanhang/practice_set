
class MyPromise{
 constructor(fn){
    this.onresolve = this.resolve.bind(this);
    this.onreject = this.reject.bind(this);
    this.handleError = ()=>{};
    this.promiseChain =[];
    fn(this.onresolve,this.onreject);

 }

resolve(value){
let storedValue = value;
try{
    this.promiseChain.forEach(fn=>{
       storedValue= fn(storedValue);
    })
return storedValue;
}
catch(e){
    this.promiseChain=[];
    this.onreject(e);
    return this;
}
}
reject(error){
    this.handleError(error);

}

then(handleSuccess){
this.promiseChain.push(handleSuccess);
return this;
}
catch(handleError){
this.handleError = handleError;
return this;
}
}

const makeApiCall = ()=>{
const random = Math.random();
return new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        if(random<0.05){
            reject({statusCode:404,error:'error not found '})
        }
        else{
            resolve({statusCode:200,data:{name:'thomas li', gender:'male'}})
        }

    },1000)
})
};

makeApiCall()
.then((res)=>{
    console.log(res.data.name);
    return res;
})
.then(res=>{
    console.log(res.data.gender);
})
.catch(error=>{
    console.log(error.error);
})

