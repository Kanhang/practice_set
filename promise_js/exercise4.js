

class myPromise{

constructor( fn ){

this.resolve = onResolve.bind(this);
this.reject = onReject.bind(this);
this.promiseChain =[];
this.error= ()=>{};
fn(this.resolve,this.reject);
}

then(handleSuccess){
    this.promiseChain.push(handleSuccess);
    return this;
}
catch(handleError){
    this.error= handleError;

}
onReject(e){
    this.error= e;
}
onResolve(){
    let storedvalue;
   try{ this.promiseChain.forEach(fn=>{
  storedvalue=  fn()
    })
    return storedvalue;}
    catch(e){
    this.promiseChain = [];
        this.reject(e);
    }

}
}