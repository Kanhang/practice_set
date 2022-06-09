class simplePromise{
    constructor(fn){
        this.onResolve= this.resolve.bind(this);
        this.onReject = this.reject.bind(this);
        this.promiseChain =[];
        this.handleError= ()=>{};
        setTimeout(()=>{
        fn(this.onResolve,this.onReject);
    },200)
    }
resolve(value){
    let storedValue = value;
    try{ 
        for(let i =0; i< this.promiseChain.length;i++){
        storedValue= this.promiseChain[i](storedValue);
        }
     return storedValue;
    }
    catch(e){
        this.promiseChain=[];
        this.reject(e);
        return this;
    }
}
reject(error){
    this.handleError(error);
}
then(fn){
    this.promiseChain.push(fn)
    return this;
}
catch(fn){
    this.handleError= fn;
    return this;
}


}

const fakeAPI = ()=>{
    const random = Math.random()
return new simplePromise((resolve,reject)=>{
  //  setTimeout(()=>{
        if(random <0.05){
            reject({statusCode:404, error:"not found"});
        }else{
            resolve({statusCode:200, data:{user:'Thomas Li',age:25}});
        }
   // },200)
})
}

fakeAPI().then((res)=>{
console.log(res.data.user)
return res
})
.then((res)=>{
    console.log(res.data.age);
    })
.catch((error)=>{
    console.log(error.error);
})