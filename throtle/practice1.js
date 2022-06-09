function throttle(func ,delay ){
    let waiting= false;
    let lastArgs = null;
    return function(args){
        if( !waiting ){
            waiting =true;
            func.call(this, ...args);
            let timer= function(){ 
                setTimeout(()=>{
                waiting = false;
                if(lastArgs){
                    func.call(this, ...lastArgs);
                    waiting =true; 
                    lastArgs=null;
                    timer();
                }
            },delay);}
            timer( );  
        }
        else{
            lastArgs=args;
        }
    }
}
const func  = function(arg){
    console.log(arg)
}    
const throttled = throttle(func,1000);


setTimeout(() => throttled('A'),200)
setTimeout(() => throttled('B'),800)
setTimeout(() => throttled('C'),600)
setTimeout(() => throttled('D'),1100)
setTimeout(() => throttled('E'),1400)
setTimeout(() => throttled('F'),1800)