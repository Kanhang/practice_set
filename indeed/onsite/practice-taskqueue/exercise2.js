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
        this.jobs=[];
        this.delay=delay;
        this.running =false;
        this.enqueue= this.enqueue.bind(this);
        this.run = this.run.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    enqueue(task, id, callback ,priority){
        try{
            if(typeof task !== 'function'){
                throw new Error('function has to be a function');
            }
        if(!this.running){
            this.running =true;
            task(id,this.run,this.delay,callback);
        }
        else{
            this.jobs.push({task:task, id:id, p: priority});
        }}
        catch(e){
            callback(null,e);
        }

    }
    run(id,callback){
       callback(`task${id} is running`,null);
        this.running= false;
        if(this.jobs.length>0){
            let index= -1;
            let highest= 0 ; 
            for (let i=0 ; i<this.jobs.length ;i++){
               if( this.jobs[i].p >highest){
                   highest =this.jobs[i].p;
                   index= i; 
               }
            }
           this.enqueue(this.jobs[index].task,this.jobs[index].id,callback,this.jobs[index].p);
           this.jobs.splice(index,1);
        }
    }

    cancel(id){
        const index = this.jobs.findIndex((job)=> job.id === id);
        if(index===-1){
            console.log( 'this has been ran or is running');
        }else{
            console.log(`task ${this.jobs[index].id} has been removed`);
            this.jobs.splice(index,1);
        }
    }
}

function callback(result,err){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
}
function testfn(id, run,delay,callback){
    setTimeout(()=>{
        run(id,callback);
    },delay)

}

const tq= new TaskQueue(1000);

tq.enqueue(testfn,1,callback,1);
tq.enqueue('gf',6,callback,2);
tq.enqueue(testfn,2,callback,3);
tq.enqueue(testfn,3,callback,4);
tq.cancel(2)
tq.enqueue(testfn,4,callback,5);