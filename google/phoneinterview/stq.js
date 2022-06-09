class STQ {
    constructor() {
        this.queue = [];
        this.running = false;
    }

    add(callback, ...args){
        return new Promise((resolve,reject)=>{
            this.queue.push({
                callback,
                resolve,
                reject,
                args
            })
           this.run();
        })
     
    }
    run() {
        if(this.running===true){
            return
        }
        const task = this.queue.shift();
        this.running= true;
        try{
        task.callback().then(result =>{
            task.resolve(result);
            this.running= false;
            this.run();
        }, err=>{
            task.reject(err);
            this.running= false;
            this.run();
        })
    } catch(err) {
        task.reject(err);
        this.running= false;
        this.run();
    }
}
    
}
const queue = new STQ(2);

for (let i = 0; i < 5; i++) {
    queue.add(() => {
        console.log(`START ${i} ${Date.now()}`);
        return new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    }).then(() => {
        console.log(`END   ${i} ${Date.now()}`);
    });
}
