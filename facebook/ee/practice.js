class EventEmitter {
    constructor(){
        this.subscriptions = new Map();
    }
    subscribe(eventName, callback) {
        try{
            if(typeof callback !== 'function'){
                throw new Error('callback has to be a function ')
            }
        if (!this.subscriptions.has(eventName)){
            this.subscriptions.set(eventName, new Set());
        }
        const obj = {callback};
        const sub = this.subscriptions.get(eventName)
    
        sub.add(obj);
        return {
            release : () =>{
            sub.delete(obj)
            if(sub.length===0){
                this.subscrioptions.delete(eventName);
            }
            }
        }}catch(e){
            console.log(e);
        }
    }
    
    emit(eventName, ...args) {
        const sub = this.subscriptions.get(eventName);
        for (const obj of sub){
            obj.callback.call(this,...args);
        }        
    }
}




const cb = ()=>{
console.log('hahah');
}

const ee = new EventEmitter();
const sub = ee.subscribe('event1',cb);
const sub1 = ee. subscribe('event2','haha')
ee.emit('event1')
sub.release();
ee.emit('event1');