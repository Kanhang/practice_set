function throttle (func, delay){
    let waiting = false;
    let lastArgs = null;
    return function( ...args) {
        if (!waiting) {
            func.apply(this,args);
            waiting= true;
            let timer = function(){
                 setTimeout(()=>{
                waiting=false;
                if(lastArgs) {
                    waiting= true;
                  
                    func.apply(this, lastArgs);
                    lastArgs=null;
                    timer();
                }
            },delay);}
            timer();
        }
        else {
            lastArgs = args;
        }

    }
}