
function throttle(func, delay) { 
    let waiting = false;
    let lastArgs = null;
    return function (...args){
        if (!waiting ){
            func.apply(this, args);
            waiting =true;
            let timer = () => setTimeout(()=>{
                waiting =false;
                if(lastArgs){
                   
                    func.apply(this,lastArgs);
                    lastArgs= null;
                    waiting=true;
                    timer();
                }
            },delay);
            timer();
        }
        else {
            lastArgs = args;
        }
    }
}