
// first create a subscriptions as map, 
//and we set eventname with a set;


// please complete the implementation
class EventEmitter {
    constructor(){
    this.subscriptions= new Map(); 
    };
    subscribe(eventName, callback) {
    try{
      if(!this.subscriptions.has(eventName)){
        this.subscriptions.set(eventName,new Set());
      }
        const sub = this.subscriptions.get(eventName);
      const cb= {callback};
      sub.add(cb);
      return {
        
        release : ()=>{
          sub.delete(cb);
          if(typeof cb.callback !== 'function'){
              console.log(typeof cb)
              throw new Error('not a function')
          }
          console.log('release successful')
          if(sub.size===0){
            this.subscriptions.delete(eventName);
          }
        }
  
      } }
      catch(e){
          console.log(e);
      }
  
    }
    
    emit(eventName, ...args) {
        const sub = this.subscriptions.get(eventName);
           if (sub) {
          sub.forEach((cb)=>{
//    console.log(cb)
          cb.callback.apply(this,args);
          })
           }
        }
      
        
    
  }
  function callback1(...args){
    console.log('haha',...args)
  }
  const emitter = new EventEmitter();
  
  const sub1= emitter.subscribe('event1', callback1);
  
   //emitter.emit('event1')
   //sub.release();
 // console.log(emitter.subscriptions);  //haha printed once

//  const sub2=emitter.subscribe('event1', callback1)
//  emitter.emit('event1')                 //haha printed twice
//  emitter.emit('event1', 1, 2, 3)  //print 1,2,3
//  emitter.emit('event1', 4,5,6) // print 4,5,6

//  emitter.emit('event1', 1, 2, 3) //haha   1,2,3

//  sub1.release() //release successful

//  emitter.emit('event1', 4,5,6) //not working 
//  const sub1 = emitter.subscribe('event1', callback1)
 const sub2 = emitter.subscribe('event1', callback1)
 emitter.emit('event1', 1, 2, 3)
 sub2.release()
 emitter.emit('event1', 4,5,6)
