function getSomeData(a,b, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        console.log('async request');
        resolve(callback(a+b));
      }, 1000);
    });
  }
  
  function memoize(fn){
  const m = new Map();
  return function(){
  let key = Array.from(arguments).slice(0,2).join('_');
    console.log(key)
    if (m.has(key)){
      console.log('we are getting from memo but not calculation');
      return m.get(key);
  }else{
      console.log('doing calculation');
      let value =fn.apply(this,[...arguments]);
      m.set(key,value);
      return value;
  }
  }
  }
  
  const memoizedGetSomeData = memoize(getSomeData);
  
  const callback_fn = (response) => {
    return response;
  }
  
  // this should make async call
  memoizedGetSomeData(1, 2,callback_fn).then(response => console.log('response from async call: ', response));
  
  // this should return response from the cache
  memoizedGetSomeData(1,2, callback_fn).then(response => console.log('cached response: ', response));
  
  // this should make async call (different argument)
  memoizedGetSomeData(4,5, callback_fn).then(response => console.log('response from async call: ', response));