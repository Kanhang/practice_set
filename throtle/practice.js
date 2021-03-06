//throttle 

function throttle(func, delay){
    let waiting = false, lastArgs = null;
    return function(...args){
      if(!waiting){
        func.apply(this, args)
        waiting = true;
      var timeout = () => setTimeout(() => {
          waiting = false;
          if(lastArgs){
            func.apply(this, lastArgs);
            waiting = true;
            lastArgs = null;
            timeout();
          }
        }, delay);
        timeout();
      }
      else 
        lastArgs = args
    }
  }
    const func = (arg) => {
        console.log(arg)
       }
       const throttled = throttle(func, 1000)
       //format of setimeout(takes a error function);
    setTimeout(() => throttled('A'),200)
    setTimeout(() => throttled('B'),800)
    setTimeout(() => throttled('C'),600)
    setTimeout(() => throttled('D'),1100)
    setTimeout(() => throttled('E'),1400)
    setTimeout(() => throttled('F'),1800)
//     const run = (input) => {
//       currentTime = 0
//       const func = (arg) => {
//        console.log(arg)
//       }
//       const throttled = throttle(func, 1000)
//     //   input.forEach((call) => {
//     //      const [arg, time] = call.split('@')
//     //      setTimeout(() => throttled(arg), time)
//     //   })
//     setTimeout(() => throttled('A'),200)
//     setTimeout(() => throttled('B'),800)
//     setTimeout(() => throttled('C'),600)
//     setTimeout(() => throttled('D'),1100)
//     setTimeout(() => throttled('E'),1400)
//     setTimeout(() => throttled('F'),1800)
//     }
    
// run(['A@200', 'B@800', 'C@1100']);