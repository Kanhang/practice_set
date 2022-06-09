// 上次昂赛后又加面了两轮前端：1.实现一个TaskQueue类，构造函数TaskQueue(delay /* ms */)
// ，有两个方法enqueue(task)和run()。
// 要求调用enqueue是将task(function)加入任务队列中，
// 调用run运行队列中的所有任务，每个任务间隔delay毫秒。
// follow up:
// 1）如果task抛出错误怎么处理
// 2）task有返回值，每个任务加上一个回调，在task完成后运行callback。即enqueue(task, callback)，callback形式为callback(result, err)
// 3）实现一个cancel方法，取消一个队列中的task，如果task已运行或正在运行，则打印警告
// 4）给每个任务设置一个prio‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌rity，即enqueue(task, callback, priority)，priority高的先运行。时间复杂度？
// 2. code review，主要涉及prototype和setTimeout/setInterval

class TaskQueue{
    constructor(delay){
        this.delay= delay;
        this.jobs= [];
        this.enqueue = this.enqueue.bind(this);
        this.run = this.run.bind(this);
        this.running = false;
        this.cancel= this.cancel.bind(this);
    }
    cancel(id){
       const index=  this.jobs.findIndex((job)=> job.id===id);
       if(index===-1){
           console.log(`task${id} is running or has run `);
       }else{
           console.log(`task${id} is removed`);
           this.jobs.splice(index,1);
       }
    }
    enqueue(task,id, cb,priority){
        try{
        if( typeof task !== 'function' ){
         throw new Error(`task ${id}has to be a function `);
        }
        else{
        if( !this.running ){
            this.running= true;
            task(id,this.delay, this.run,cb);
        } 
        else{
            this.jobs.push({id:id,fn:task,cb:cb, p:priority});
        }}
    }
        catch(e){
            cb(null,e);
        }
    }
    run(id,cb){  
        cb(id,null);
    this.running =false;
    if(this.jobs.length>0){

        let highest =0;
        let index= -1;
        for(let i =0;i< this.jobs.length;i++){
           if( this.jobs[i].p>highest){
               highest = this.jobs[i].p;
               index=i;
           } 
        }
        const {id, fn ,cb } = this.jobs[index];
        this.enqueue(fn,id,cb);
        this.jobs.splice(index,1);
    }
}
}

const testFn = (id,delay,run,cb)=>{
    setTimeout(()=>{
        run(id,cb);
    },delay)
}
function callback(result,error){
    if(result){
        console.log(`task${result} is being logged`);
    }else{
        console.log(`${error}`);
    }

}

const t = new TaskQueue(1000);
t.enqueue(testFn,1,callback,1)
t.enqueue('error',6,callback,2)
t.enqueue(testFn,2,callback,3)
t.enqueue(testFn,3,callback,4)
t.enqueue(testFn,4,callback,5)
t.enqueue(testFn,5,callback,6)
//t.cancel(1);