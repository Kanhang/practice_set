//defined a promise by yourself
class PromiseSimple{
    constructor(executionFn){
        this.promiseChain = [];
        this.handleError =  ()=>{};
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this); // bind class's function for variables for future use
    
        executionFn(this.onResolve,this.onReject);

    }
    then (handleSuccess){
        this.promiseChain.push(handleSuccess);
        return this;
    }

    catch(handleError){
        this.handleError= handleError;
        return this
    }

    onResolve(value){
        let storedValue= value;
        try{
        this.promiseChain.forEach((nextFn)=>{
            storedValue = nextFn(storedValue);

        })}
        catch(error){
            this.promiseChain=[];
            this.onReject(error);
        }
    }
    onReject(error){
        this.onReject(error);
    }
}

const fakeApi = ()=>{
    const user = {
        username: 'treyhuffine',
        favoriteNumber: 42,
        profile: 'https://gitconnected.com/treyhuffine'
      };
    let num =Math.random();
    if (num <0.05){
        return {
            statusCode:404,
            error:"notfound",
            message: "cannot find user"
        }
    }
    else{
        return {
            status:200,
            data:user
        }
    }
}
//how to handle the success and erorr with promise 
// so we need to use onResolve and onReject in 
//
const makeApiCall =  ()=>{
    return new PromiseSimple((resolve,reject)=>{
        setTimeout (()=>{
            const apiResponse= fakeApi();
            console.log(apiResponse);
            if (apiResponse.statusCode >= 400){
                reject(apiResponse.error); 
        
            }
            else{
               resolve(apiResponse.data);
            }
        },1000)
       
    })
   
}
//the way to execute the promise
makeApiCall()
    .then((user) => {
      console.log('In the first .then()');
    
      return user;
    })
    .then((user) => {
      console.log(`User ${user.username}'s favorite number is ${user.favoriteNumber}`);
    
      return user;
    })
    .then((user) => {
      console.log('The previous .then() told you the favoriteNumber')
    
      return user.profile;
    })
    .then((profile) => {
      console.log(`The profile URL is ${profile}`);
    })
    .then(() => {
      console.log('This is the last then()');
    })
    .catch((error) => {
      console.log(error.message);
    });
