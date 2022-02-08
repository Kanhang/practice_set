    // // const memoizedAsyncFn = memorize(AFun);
    // // memoizedAsyncFn((res)=>{console.log("===>>", res)}, 1, 2);
    // // 要求下面from cache
    // // memoizedAsyncFn((res)=>{console.log("===>>", res)}, 1, 2‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌); // from cache
    // // 之前弄过Afun返回Promise的，不返回Promise的异步弄了半天。




    const asyncAdd = async(a,b)=>{
      return new Promise(resolve =>{
          setTimeout(()=>{
              resolve(a+b);
          },1000);
      })
    }

    const memorized = memo(asyncAdd);
    
    function memo(fn){
        const m = new Map();
        const key = Array.from(arguments).slice(0,2).join(',');
        return function(){
            return new Promise(resolve=>{
                    if( m.has(key)){
                        console.log('we are getting from cache not doing calculation');
                   resolve(m.get(key));
                   return
                    }
                    else{
                        fn.apply(this,[...arguments])
                        .then((res)=>{
                        console.log('calculating');
                        m.set(key,res);
                        console.log(res);
                        resolve(res);
                         })
                    }
                
            })
           
        };

    }
    
    const input = document.createElement('button');
    input.addEventListener('click',onClick)
    
    document.body.appendChild(input);
    function onClick(){
        memorized(1,2)
    }



  //this has to run in broswer, type the command one by one 
  // directly run work


console.log(serial());
async function serial(){
  await memorized(1,2)
  await memorized(1,2)
}

function sleep() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
  
  async function serial() {

    await sleep();
    await sleep();
  }
  
