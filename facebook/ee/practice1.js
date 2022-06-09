class EventEmitter{
    constructor(){
        this.subscriptions = new Map();
        }
 subscribe(eventName, callback){
     if(!this.subscriptions.has(eventName)){
        this.subscriptions.set(eventName,new Set());
     }
     const sub = this.subscriptions.get(eventName);
     const cb = {callback};
     sub.add(cb);
     return {
         release: ()=>{
             sub.delete(cb);
            if(sub.size===0){
            this.subscriptions.delete(sub);
            }
         }
     }
 }
 emit(eventName,...args){
    const sub = this.subscriptions.get(eventName);
    if(sub){
    sub.forEach((cb)=>{
        cb.callback.call(this,...args);
    })}
    }
}
function testCb(...args){
    console.log('haha',...args);
}

const ee = new EventEmitter();
const sub1 = ee.subscribe('event1',testCb);
const sub2= ee.subscribe('event1',testCb);
//sub1.release();
ee.emit('event1');