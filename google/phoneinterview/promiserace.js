function race(promises) {
    return new Promise((resolve,reject)=>{
      promises.forEach(promise=>{
        promise.then(resolve,reject)
      })
    })
  // your code here
}