//vanila js 
//use codepen
// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
// .then(function(res) { return res.json() })
// .then(function(result) {
//       const items= result.items;
//       console.log(items);
//     })
//   .catch(function(error) {
//    console.log(error);
//   })

// async_fun();
// //result cannot be return 
// async function async_fun(){
//   let res= await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//   let result = await res.json();
//   console.log(result);
// }

const PromiseA= 
      function(){
 //settimeout has to inside promise
         return new Promise((resolve,reject)=>{
           setTimeout(()=>{
           resolve(4);
            },1000)
           }); 
      }

const PromiseB= 
   function (){
          return new Promise((resolve,reject)=>{
             setTimeout(()=>{
               resolve(5);
             },2000)      
          });   
  
   }  
const PromiseC = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject('error'); 
    },2000)
  })
}
//return all values in array once resolved;
// Promise.all([PromiseA(),PromiseB()])
// .then((res)=>{
//   console.log(res[0]);
//   console.log(res[1]);
// })
     
//race output one value of promise , the faster one
// Promise.race([PromiseA(),PromiseB()])
// .then((res=>{
//   console.log(res); //output 4
// }))

//Promise.allSettled()

//如果有promise被reject，只返回resolve的结果‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌
//
Promise.allSettled([PromiseA(),PromiseB(),PromiseC()]).then(res=>{
  for(let result of res){
  if(result.status ==='fulfilled'){
    console.log(result.value)
  }
    else if(result.status==='rejected') {
      console.log(result.reason);
    }
  } 
})


const promiseTimeout = function(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        reject('timeout');
   },1500);
  });
}
Promise.allSettled([promiseTimeout(),PromiseB()])
.then((res=>{
console.log(res[0]);
console.log(res[1]);
}))


const dp = function () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject('timeout');
        }, 500);
    });
}

Promise.race([dp(),PromiseA()]).then(res=>console.log(res));