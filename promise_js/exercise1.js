
class MyPromise{

    constructor(executionFunction){
        this.promiseChain = [];
        this.handleError = () => {};
        this.onResolve= this.onResolve.bind(this);
        this.onReject= this.onReject.bind(this);
        executionFunction(this.onResolve,this.onReject);
    }

    then(handleSuccess){
        this.promiseChain.push(handleSuccess);
        return this
    }
    catch(handleError){
        this.handleError=handleError;
        return this;
    }
    onResolve(value){
        let storedValue= value;
        try{
         this.promiseChain.forEach((nextFunction)=>{
           storedValue=  nextFunction(storedValue);
         })
        }
        catch(error){
            this.promiseChain=[];
            this.onReject(error);

        }
    }
     onReject(error){
         this.handleError(error);
     }
}

fakeBackendAPI=()=>{
    const user={
        username:"hahaha",
        age:19}
    if (Math.random()>0.05){
        return{
           data: user,
           statusCode:200
        }
    }
    else{
        const error={
            statusCode:404,
            error:"notfound",
            message:"could not find user"
        }
        return error;
    }
}

const makeApiCall=()=>{
    return new MyPromise((resolve,reject)=>{
       setTimeout(()=>{
        const apiResponse=fakeBackendAPI();
        if (apiResponse.statusCode===404){
            reject(apiResponse);
        }
        else{
            resolve(apiResponse.data);
        }
       },5000)
     
    })
    
}
makeApiCall()
.then((user)=>{
    console.log("this is first .then()");
    return user;
})
.then((user)=>{
    console.log(`user's age is ${user.age}`);
    return user;
})
.then((user)=>{
    console.log(`user's username is ${user.username}`);
})
.catch((error) => {
    console.log(error.message);
  });