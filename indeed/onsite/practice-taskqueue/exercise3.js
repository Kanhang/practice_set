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
        this.delay=delay;
        this.enqueue= this.enqueue.bind(this);
        this.run= this.run.bind(this);
        this.running =false;
        this.jobs=[];
        this.cancel= this.cancel.bind(this);
    }
    enqueue(task,id,callback,priority){
            this.jobs.push({task:task,id:id,callback:callback,p:priority});
    }
    run(){
        try{
        if(this.jobs.length>0){
        let highest=0;
        let index=-1;
        for (let i=0;i<this.jobs.length;i++){
            const {p} = this.jobs[i];
            if(p>highest){
                highest= p;
                index=i;
            }
            
        }
        const {task,id,callback ,p}=this.jobs[index];
        this.jobs.splice(index,1);
        if (typeof task!=='function') {
            throw new Error('task has to be a function');
        }
        console.log(`function ${id} with ${p} ran;`)
        task(this.run,this.delay,callback)
        }}
        catch(e){
            console.log(e);
            this.run();
        }

    }
    cancel(id){
        const index = this.jobs.findIndex((job)=>job.id ===id);
        if(index===-1){
            console.log('the task is ran already or runing at the moment');
            
        }else{
            console.log(`task ${id} has been removed`);
            this.jobs.splice(index,1);
        }
       }
}

function callback(result,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}

function testFn(run,delay,callback){
    setTimeout(()=>{
        try{
            const result = Math.random();
            if(result<0.5){
               // throw new Error('error, too small');
            }
            run();
            callback(result,null);
        }
        catch(e){
            callback(null,e);
            run();
        }     
    },
    delay)
}
const tq = new TaskQueue(1000);
tq.enqueue(testFn,1,callback,1);
tq.enqueue(testFn,2,callback,2);
tq.enqueue('gag',5,callback,3);
tq.enqueue(testFn,3,callback,4);
tq.enqueue(testFn,4,callback,5);
tq.run();
// tq.cancel(1);
// tq.cancel(2);
