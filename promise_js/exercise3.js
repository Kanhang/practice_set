//the way to define promise
const makeApiCall = function (){
    return new Promise((resolve,reject)=>{
        const random = Math.random(0,1);
        if (random <0.05){
            reject("error")
        }
        else{
            resolve({'user':'thomas called'})
        }
    })
}
// the way to use promise
makeApiCall()
.then(data =>{
    console.log(data.user+'haha');
    return data;
})
.then(data =>{
    console.log(data.user+'hahhahaa');
    return data;
})
.catch(e=>{
    console.log(e);
})
//implement your own promise
// promise takes  a function
class PromiseSimple{
constructor(fn){
    this.error=null;
    this.promiseChain= []; //stores the handlesuccess function
    this.onResolve =this.onResolve.bind(this);
    this.onReject = this. onReject.bind(this);
    fn(this.onResolve,this.onReject);
}
//then takes a funciton
then(handleSuccess){
    this.promiseChain.push(handleSuccess)
    return this;
}

catch(handleError){
    this.error= handleError;
    return this;
}
OnResolve(){
let storedValue;
try{
    this.promiseChain.forEach((nextFn)=>{
      storedValue=  nextFn();
    })
    return storedValue;
}
catch(e){
    this.promiseChain=[];
    this.onReject(e);
}
}
onReject(error){
    this.error=error;
}


}